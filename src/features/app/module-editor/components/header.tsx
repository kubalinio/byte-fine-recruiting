import { Reset } from "assets/icons"
import { Logo } from "features/shared/components/logo"
import { Button, Typography } from "ui"

type HeaderProps = {
  resetWorkspace: () => void
  isEmpty: boolean
}

const Header = ({ resetWorkspace, isEmpty }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between'>
      <span className='flex items-center gap-2'>
        <Logo />

        <Typography as='h1' variant='h3' className='text-black-75'>
          CanvasEditor
        </Typography>
      </span>

      <Button
        disabled={isEmpty}
        variant='destructive'
        className='p-0'
        onClick={resetWorkspace}
      >
        <span>Reset</span>

        <Reset />
      </Button>
    </header>
  )
}

export { Header }
