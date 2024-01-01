import Footer from 'src/components/Footer/Footer'
import MyAccount from 'src/components/MyAccount/MyAccount'
import Nav from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <main className="grid min-h-screen grid-cols-12 gap-x-5 bg-silverTree dark:bg-nileBlue">
        <aside className="col-span-4 pb-10">
          <div className="fixed z-50">
            <Nav />
          </div>
          <img src="/images/bg__interior.svg" alt="Aside Illustration" />
          <a href="#">
            <img
              src="/images/logo__secret-santa.svg"
              alt="Secret Santa"
              className="width-[25vw] z-2 absolute top-[7vw]"
            />
          </a>
        </aside>
        <div className="col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            <MyAccount />
          </div>
          {children}
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default InteriorLayout
