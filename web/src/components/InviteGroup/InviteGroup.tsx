import RoundButton from '../RoundButton/RoundButton'
import InviteCard from '../InviteCard/InviteCard'

const InviteGroup = () => {
  return (
    <div>
      <div className="label text-white">
        Invite a friend or family member
      </div>
      <div className="mb-10 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-nileBlue">
        <div className="field relative mb-0 flex-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="" />
        </div>
        <div className="field relative mb-0 flex-1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="" />
        </div>
        <div>
          <RoundButton status="warning" />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-x-12 gap-y-8'>
        <InviteCard
          avatar={{ avatar: '/images/avatar-01.png', indicator: 'success' }}
          isCloseShowing={true}
          name={'Zakariae Abassi'}
          email={'Zakariaeabassioff@gmail.com'}
        />
        <InviteCard
          avatar={{ avatar: '/images/avatar-01.png', indicator: 'success' }}
          isCloseShowing={true}
          name={'Zakariae Abassi'}
          email={'Zakariaeabassioff@gmail.com'}
        />
        <InviteCard
          avatar={{ avatar: '/images/avatar-01.png', indicator: 'success' }}
          isCloseShowing={true}
          name={'Zakariae Abassi'}
          email={'Zakariaeabassioff@gmail.com'}
        />
        <InviteCard
          avatar={{ avatar: '/images/avatar-01.png', indicator: 'success' }}
          isCloseShowing={true}
          name={'Zakariae Abassi'}
          email={'Zakariaeabassioff@gmail.com'}
        />
      </div>
    </div>
  )
}

export default InviteGroup
