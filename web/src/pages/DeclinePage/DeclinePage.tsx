import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const DeclinePage = () => {
  return (
    <>
      <Metadata title="Decline" description="Decline page" />
      <HeaderWithRulers className='text-white' heading='Thanks'></HeaderWithRulers>
      <h1 className="page-title">You'll be missed</h1>
    </>
  )
}

export default DeclinePage
