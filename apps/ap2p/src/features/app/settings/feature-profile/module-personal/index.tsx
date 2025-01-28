import {
  EditableContextProvider,
  EditButton
} from "features/app/settings/feature-profile/shared/editable-context/editable-context-controller"

import { Box, Typography } from "@ap2p/ui"

import { PersonalForm } from "./components/personal-form"
import { ReadonlyData } from "./components/readonly-data"
import { useUpdateUser } from "./hooks"

const ModulePersonal = () => {
  const { user, handleSubmit, isLoading, isSubmitted } = useUpdateUser()

  return (
    <Box variant='card' padding='md' className='relative space-y-4'>
      <Typography as='h3' variant='subtitle-2'>
        Personal
      </Typography>

      <EditableContextProvider>
        <EditButton className='absolute -top-[0.125rem] right-4' />

        <ReadonlyData data={user} />

        <PersonalForm
          defaultData={user}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isSubmitted={isSubmitted}
        />
      </EditableContextProvider>
    </Box>
  )
}

export { ModulePersonal }
