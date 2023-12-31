type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-w-screen min-h-screen bg-silverTree dark:bg-nileBlue bg-auth bg-[center_top] bg-[length:1440px_auto] min-[1440px]:bg-[length:100%_auto] bg-no-repeat">
      <img src="/images/logo__secret-santa.svg" alt=""  className="mx-auto mb-24 w-[460px] pt-24"/>
      {children}
    </main>
  )
}

export default AuthLayout
