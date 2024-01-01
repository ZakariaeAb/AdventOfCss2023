import { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'

const Nav = () => {
  const [isHamburger, setisHamburger] = useState(true)

  const toggleNav = () => {
    setisHamburger((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="absolute left-5 top-5 z-10">
        <Hamburger isHamburger={isHamburger} toggleNav={toggleNav} />
      </div>
      <div
        className={`flex h-screen w-[460px] flex-col justify-between bg-supernova px-12 pb-12 pt-[160px] ${
          isHamburger ? '-translate-x-[120%]' : 'translate-x-0'
        } transition-transform`}
      >
        <nav className="top-nav">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Our event</a>
            </li>
            <li>
              <a href="#">My wish list</a>
            </li>
          </ul>
        </nav>
        <nav className="bottom-nav">
          <div className="mb-2 font-condensed text-5xl font-bold uppercase text-spanishGreen">
            Past Events
          </div>
          <ul>
            <li>
              <a href="#">
                <div className="text-2xl font-bold">Balthis Christmas</div>
                <div>Decembre 23, 2023</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
