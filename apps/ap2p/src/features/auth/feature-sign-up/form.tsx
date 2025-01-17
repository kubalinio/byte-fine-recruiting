import { SignUpFormSchema, SignUpFormSchemaType } from "@ap2p/auth"
import { Button, Divider, Form } from "@ap2p/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ControlledCheckboxField,
  ControlledInputField,
  ControlledPasswordField,
  ControlledPhoneField
} from "features/shared/components/form-fields"
import { Link } from "features/shared/components/link"
import { SubmitHandler, useForm } from "react-hook-form"

import { FormCheckboxes } from "./form-checkboxes"

type SignUpFormProps = {
  onSubmit: SubmitHandler<SignUpFormSchemaType>
  isPending: boolean
  isSubmitted: boolean
}
const SignUpForm = ({ onSubmit, isPending, isSubmitted }: SignUpFormProps) => {
  const form = useForm<SignUpFormSchemaType>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirm: "",
      terms_and_conditions: false
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid w-full grid-cols-1 gap-y-8'
      >
        <div className='grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-9'>
          <ControlledInputField name='first_name' label='First Name' />

          <ControlledInputField name='last_name' label='Last Name' />

          <ControlledInputField type='email' name='email' label='Email' />

          <ControlledPhoneField name='phone' label='Phone' />
        </div>

        <Divider className='w-full' />

        <div className='grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-9'>
          <ControlledPasswordField name='password' label='Password' />

          <ControlledPasswordField
            name='password_confirm'
            label='Confirm Password'
          />
        </div>

        <Divider className='w-full' />

        <FormCheckboxes name='tools' label='Tools' />

        <div className='flex items-center justify-between'>
          <ControlledCheckboxField
            name='terms_and_conditions'
            label={
              <>
                I agree to the{" "}
                <Link
                  href='/terms-and-conditions'
                  className='pl-0 text-xs text-foreground'
                >
                  Terms and Conditions
                </Link>
              </>
            }
          />

          <Button
            type='submit'
            size='sm'
            className='w-fit'
            disabled={isPending || isSubmitted}
            loading={isPending}
            // loading={true}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { SignUpForm }
