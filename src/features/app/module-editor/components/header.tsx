import { Reset } from "assets/icons"
import { Logo } from "features/shared/components/logo"
import { Button, Typography } from "ui"

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <span className='flex items-center gap-2'>
        <Logo />

        <Typography as='h1' variant='h3' className='text-black-75'>
          CanvasEditor
        </Typography>
      </span>

      <Button variant='destructive' className='p-0'>
        <span>Reset</span>

        <Reset />
      </Button>
    </header>
  )
}

export { Header }
