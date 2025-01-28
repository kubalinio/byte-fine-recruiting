import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

import { BgPattern } from "assets/auth/bg-pattern"
import { Link } from "features/shared/components/link"
import { SubmitHandler } from "react-hook-form"

import { SignInFormTypes, useAuth } from "@ap2p/auth"
import { Container, Typography } from "@ap2p/ui"

import { SignInForm } from "./form"
import { Header } from "./header"

const SignIn = () => {
  const { login, isAuthenticated, isAuthenticating } = useAuth()

  const onSubmit: SubmitHandler<SignInFormTypes> = (data) => {
    login(data)
  }

  const navigate = useNavigate({ from: "/sign-in" })

  useEffect(() => {
    if (isAuthenticated) {
      navigate({
        to: "/"
      })
    }
  }, [isAuthenticated])

  return (
    <Container
      as='section'
      className='relative col-span-12 max-w-[30rem] space-y-8 overflow-hidden py-12'
    >
      <BgPattern className='absolute bottom-1/2 left-1/2 right-1/2 z-[-1] -translate-x-1/2' />

      <Header />

      <SignInForm
        isLoading={isAuthenticating}
        isSubmitted={isAuthenticated}
        onSubmit={onSubmit}
      />

      <div className='flex items-center justify-center'>
        <Typography variant='body-2' className='text-xs'>
          Don't have an account?
        </Typography>

        <Link to='/sign-up' className='pl-1'>
          Sign up
        </Link>
      </div>
    </Container>
  )
}

export { SignIn }
