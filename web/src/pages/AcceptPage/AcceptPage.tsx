import { Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import Upload from 'src/components/Upload/Upload'

const AcceptPage = () => {
  return (
    <>
      <Metadata title="Accept" description="Accept page" />
      <h3 className="text-center font-handwriting text-3xl uppercase text-white">
        Awesome!
      </h3>
      <HeaderWithRulers
        className="text-white"
        heading="Sign Up"
      ></HeaderWithRulers>
      <Form className="relative mx-auto mt-4 w-full max-w-[600px]">
        <div className="field">
          <ShowHidePassword label="password" name="password" />
        </div>
        <div className='field'>
          <Upload />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}

export default AcceptPage
