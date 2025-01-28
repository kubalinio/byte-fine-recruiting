import { zodResolver } from "@hookform/resolvers/zod"
import {
  ControlledCheckboxField,
  ControlledInputField,
  ControlledPasswordField
} from "features/shared/components/form-fields"
import { Link } from "features/shared/components/link"
import { SubmitHandler, useForm } from "react-hook-form"

import { SignInFormSchema, SignInFormTypes } from "@ap2p/auth"
import { Button, Form } from "@ap2p/ui"

type SignInFormProps = {
  onSubmit: SubmitHandler<SignInFormTypes>
  isLoading: boolean
  isSubmitted: boolean
}

const SignInForm = ({ onSubmit, isLoading, isSubmitted }: SignInFormProps) => {
  const form = useForm<SignInFormTypes>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-y-6'
      >
        <ControlledInputField name='username' label='Email' />

        <ControlledPasswordField name='password' label='Password' />

        <div className='flex justify-end'>
          <ControlledCheckboxField
            name='rememberMe'
            label='Remember this account for 30 days'
          />

          <Link to='/forgot-password'>Forgot password?</Link>
        </div>

        <Button
          type='submit'
          disabled={isLoading || isSubmitted}
          loading={isLoading}
          size='sm'
        >
          Sign In
        </Button>
      </form>
    </Form>
  )
}

export { SignInForm }
