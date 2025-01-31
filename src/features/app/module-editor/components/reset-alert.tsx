import { Alert, Close, Reset } from "assets/icons"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button
} from "ui"

type ResetAlertProps = {
  disabled: boolean
  onConfirm: () => void
}

const ResetAlert = ({ onConfirm, disabled }: ResetAlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={disabled} variant='destructive' className='p-0'>
          <span>Reset</span>

          <Reset />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader className='mx-auto max-w-96 items-center'>
          <AlertDialogCancel className='absolute right-8 top-8 lg:px-2'>
            <Close className='size-8' />
          </AlertDialogCancel>

          <Alert className='text-destructive mx-auto size-72' />

          <AlertDialogTitle>Warning</AlertDialogTitle>

          <AlertDialogDescription>
            You&apos;re about to reset whole process. Are you sure you want to
            do it?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction onClick={onConfirm}>Reset</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { ResetAlert }
