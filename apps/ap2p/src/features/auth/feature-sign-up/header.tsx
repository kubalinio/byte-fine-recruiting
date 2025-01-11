import { Container, Divider, Typography } from "@ap2p/ui"
import { Logo } from "assets/images/logo"
import { Link } from "features/shared/components/Link"

const Header = () => {
  return (
    <Container variant='withoutStyle' className='w-full space-y-8'>
      <div className='flex items-center justify-between'>
        <Logo />

        <Link to='/sign-in'>Are you with us?</Link>
      </div>

      <div className='flex flex-col items-center justify-between md:flex-row'>
        <Typography
          as='h1'
          variant='h1'
          className='text-[3.2rem] md:min-w-80 md:text-[4rem]'
        >
          Enter <br /> your data
        </Typography>

        <Typography as='p' variant='body-1' className='max-w-64'>
          We need you to help us with some basic information for your account
          creation. Here are our terms and conditins. Please read them
          carefully. We are GDRP compliiant
        </Typography>
      </div>

      <Divider />
    </Container>
  )
}

export { Header }
