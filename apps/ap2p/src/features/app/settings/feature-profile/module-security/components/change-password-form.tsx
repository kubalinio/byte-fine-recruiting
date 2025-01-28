import { useEffect } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { ControlledPasswordField } from "features/shared/components/form-fields"
import { useForm } from "react-hook-form"

import { ResetPasswordFormSchema, ResetPasswordFormTypes } from "@ap2p/auth"
import { Box, Button, Form } from "@ap2p/ui"

import { useEditable } from "../../shared/editable-context"

type ChangePasswordFormProps = {
  onSubmit: (data: ResetPasswordFormTypes) => void
  isLoading: boolean
  isSubmitted: boolean
}

const ChangePasswordForm = ({
  onSubmit,
  isLoading,
  isSubmitted
}: ChangePasswordFormProps) => {
  const { isEditing, setEditing } = useEditable()

  const form = useForm<ResetPasswordFormTypes>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(ResetPasswordFormSchema)
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
        <ControlledPasswordField
          name='password'
          label='Password'
          className='col-span-2 lg:col-span-1'
        />

        <ControlledPasswordField
          name='password_confirm'
          label='Password confirmation'
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

export { ChangePasswordForm }
