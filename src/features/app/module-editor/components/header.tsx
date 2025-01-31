import { Logo } from "features/shared/components/logo"
import { Typography } from "ui"

import { ResetAlert } from "./reset-alert"

type HeaderProps = {
  isEmpty: boolean
  resetWorkspace: () => void
}

const Header = ({ isEmpty, resetWorkspace }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between'>
      <span className='flex items-center gap-2'>
        <Logo />

        <Typography as='h1' variant='h3' className='text-black-75'>
          CanvasEditor
        </Typography>
      </span>

      <ResetAlert disabled={isEmpty} onConfirm={resetWorkspace} />
    </header>
  )
}

export { Header }
