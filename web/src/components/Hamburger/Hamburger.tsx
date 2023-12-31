import { useState } from 'react'

const Hamburger = () => {
  const [isOpened, setisOpened] = useState(false)

  const handleClick = () => {
    setisOpened((prevValue) => !prevValue)
  }

  return (
    <button
      className="relative flex h-[58px] w-[68px] flex-col items-center justify-center bg-supernova"
      onClick={handleClick}
    >
      <div className={`absolute h-[3px] w-12 bg-black transition-transform ${isOpened ? '-translate-y-3' : 'rotate-45'}`} />
      <div className={`h-[3px] w-12 bg-black ${isOpened ? '' : 'hidden'}`} />
      <div className={`absolute h-[3px] w-12 bg-black transition-transform ${isOpened ? 'translate-y-3' : '-rotate-45'}`} />
    </button>
  )
}

export default Hamburger
