import {
  EditButton,
  useEditable
} from "features/app/settings/feature-profile/shared/editable-context"

import { Typography } from "@ap2p/ui"

const PasswordReadonly = () => {
  const { isEditing } = useEditable()

  if (isEditing) return null
  return (
    <div>
      <Typography as='p' variant='caption'>
        Password
      </Typography>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Typography as='p' variant='body-2'>
            Current password:
          </Typography>

          <Typography as='p' variant='caption'>
            **********
          </Typography>
        </div>

        <EditButton>Change</EditButton>
      </div>
    </div>
  )
}

export { PasswordReadonly }
