import { Logo } from "assets/images/logo"

import { Typography } from "@ap2p/ui"

const Header = () => {
  return (
    <div className='text-center'>
      <Logo className='mx-auto' />

      <Typography as='h1' variant='h3'>
        Log in to your account
      </Typography>

      <Typography as='p' variant='body-1'>
        Welcome back! Please enter your details.
      </Typography>
    </div>
  )
}

export { Header }
