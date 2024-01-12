import Icon from '../Icon/Icon'
import InviteCard from '../InviteCard/InviteCard'
import Overlay from '../Overlay/Overlay'

const Modal = ({ children, status }) => {
  return (
    <div className="center fixed inset-0 h-screen w-screen">
      <Overlay />
      <div>
        <div
          className={`relative w-full max-w-[735px] border-[6px] border-white px-20 py-12 status-${status} flex flex-col items-center justify-center`}
        >
          <button className="absolute right-6 top-6">
            <Icon id="close" size={32} />
          </button>
          <div className="text-center font-sans text-3xl font-bold tracking-tight mb-8">
            Are you sure you want to remove this ?
          </div>
          <div className="w-[80%] mb-7 text-black">
            <InviteCard
              avatar={{
                avatar: '/images/avatar-01.png',
                indicator: 'success',
              }}
              isCloseShowing={false}
              name={'Zakariae Abassi'}
              email={'Zakariaeabassioff@gmail.com'}
            />
          </div>
          <div className="flex justify-center items-center gap-8">
            <button className='text-white font-bold underline text-xl uppercase'>Cancel</button>
            <button className='text-white text-xl uppercase font-bold bg-black rounded-full py-2 px-8'>Remove</button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
