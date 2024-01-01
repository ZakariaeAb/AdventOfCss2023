import Icon from '../Icon/Icon'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MyAccount = () => {
  const [isdropDown, setisDropDown] = useState(false)

  const handleDropDown = () => {
    setisDropDown((prevValue) => !prevValue)
  }

  return (
    <div className="absolute right-6 top-6 text-black dark:text-white">
      <button
        className="mb-4 flex items-center justify-center gap-[12px]"
        onClick={handleDropDown}
      >
        <motion.div
          animate={{ rotate: isdropDown ? '180deg' : '0' }}
        >
          <Icon id="chevron" />
        </motion.div>
        <Avatar avatar="/images/avatar-03.png" />
        <div className="text-left">
          <div className="text-sm">Logged in as</div>
          <div className="text-lg font-bold ">Zakariae Abassi</div>
        </div>
      </button>
      <AnimatePresence>
        {isdropDown && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="dropdown-menu"
          >
            <ul>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="user" size={32} />
                </div>
                My account
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="calendar" size={32} />
                </div>
                My event
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon id="logout" size={32} />
                </div>
                Logout
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyAccount
