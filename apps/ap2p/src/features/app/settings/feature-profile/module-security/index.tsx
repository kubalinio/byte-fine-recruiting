import { Box, Typography } from "@ap2p/ui"
import { EditableContextProvider } from "features/app/settings/feature-profile/shared/editable-context-controller"

import { ChangePasswordForm } from "./components/change-password-form"
import { PasswordReadonly } from "./components/password-readonly"
import { TwoFactorStatus } from "./components/two-factor-status"
import { useResetPassword } from "./hook"

const ModuleSecurity = () => {
  const { handleChangePassword, isPending, isSubmitted } = useResetPassword()

  return (
    <Box variant='card' padding='md' className='space-y-4'>
      <Typography as='h3' variant='subtitle-2'>
        Security
      </Typography>

      <EditableContextProvider>
        <TwoFactorStatus />

        <PasswordReadonly />

        <ChangePasswordForm
          onSubmit={handleChangePassword}
          isLoading={isPending}
          isSubmitted={isSubmitted}
        />
      </EditableContextProvider>
    </Box>
  )
}

export { ModuleSecurity }
