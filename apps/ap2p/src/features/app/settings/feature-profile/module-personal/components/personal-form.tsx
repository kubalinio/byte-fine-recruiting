import { useEffect } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEditable } from "features/app/settings/feature-profile/shared/editable-context"
import {
  ControlledInputField,
  ControlledPhoneField
} from "features/shared/components/form-fields"
import { useForm } from "react-hook-form"

import {
  GetMeQueryResponse,
  UpdateUserFormSchema,
  UpdateUserFormTypes
} from "@ap2p/auth"
import { Box, Button, Form } from "@ap2p/ui"

type PersonalFormProps = {
  defaultData: GetMeQueryResponse | undefined
  onSubmit: (data: UpdateUserFormTypes) => void
  isLoading: boolean
  isSubmitted: boolean
}

const PersonalForm = ({
  defaultData,
  onSubmit,
  isLoading,
  isSubmitted
}: PersonalFormProps) => {
  const { isEditing, setEditing } = useEditable()

  const form = useForm<UpdateUserFormTypes>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(UpdateUserFormSchema),
    defaultValues: {
      first_name: defaultData?.first_name ?? "",
      last_name: defaultData?.last_name ?? "",
      email: defaultData?.email ?? ""
    }
  })

  useEffect(() => {
    if (isSubmitted) setEditing(false)
  }, [isSubmitted])

  if (!isEditing) return null
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-6'
      >
        <ControlledInputField
          name='first_name'
          label='First name'
          className='col-span-2 lg:col-span-1'
        />

        <ControlledInputField
          name='last_name'
          label='Last name'
          className='col-span-2 lg:col-span-1'
        />

        <ControlledInputField
          type='email'
          name='email'
          label='Email address'
          className='col-span-2 lg:col-span-1'
        />

        <ControlledPhoneField
          name='phone'
          label='Phone number'
          className='col-span-2 lg:col-span-1'
        />

        <Box className='col-span-2 flex items-center justify-end gap-4'>
          <Button
            type='button'
            size='sm'
            variant='outline'
            disabled={isLoading}
            onClick={() => setEditing(false)}
          >
            Cancel
          </Button>

          <Button
            type='submit'
            size='sm'
            disabled={isLoading}
            loading={isLoading}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Form>
  )
}

export { PersonalForm }
