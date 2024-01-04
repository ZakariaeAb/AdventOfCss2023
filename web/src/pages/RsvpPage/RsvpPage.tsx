import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'

const RsvpPage = () => {
  return (
    <>
      <Metadata title="Rsvp" description="Rsvp page" />
      <HeaderWithRulers
        className="text-white"
        heading="you’re invited TO"
      ></HeaderWithRulers>
      <h1 className="page-title">Smith Christmas</h1>
      <h3 className="text-center font-handwriting text-3xl uppercase text-white">
        December 23, 2023
      </h3>
      <div className="mx-auto mt-[66px] flex items-center justify-center gap-[70px]">
        <RsvpButton
          className="bg-orangeRed text-white"
          heading="Respectfully Decline"
          id="thumbsDown"
        />
        <RsvpButton
          className="bg-spanishGreen text-white"
          heading="I'll be there!"
          id="thumbsUp"
        />
      </div>
    </>
  )
}

export default RsvpPage
