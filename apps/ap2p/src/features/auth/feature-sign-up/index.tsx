import { Container } from "@ap2p/ui"

import { SignUpForm } from "./form"
import { Header } from "./header"
import { useSignUp } from "./hooks"

const SignUp = () => {
  const { onSubmit, isPending, isSuccess } = useSignUp()

  return (
    <>
      <Container
        variant='withoutStyle'
        className='col-span-12 flex h-full w-full flex-col gap-y-8 bg-[#F0EEF4] px-6 py-16 lg:col-span-7 lg:px-28'
      >
        <Header />

        <SignUpForm
          onSubmit={onSubmit}
          isPending={isPending}
          isSubmitted={isSuccess}
        />
      </Container>

      <Container
        variant='withoutStyle'
        className='relative hidden h-full w-full bg-[#F0EEF4] lg:col-span-5 lg:block'
      >
        <div className="sticky top-0 h-screen bg-[url('images/bg-sign-up.png')] bg-cover bg-center bg-no-repeat" />
      </Container>
    </>
  )
}

export { SignUp }
