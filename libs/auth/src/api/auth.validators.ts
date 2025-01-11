import { AsYouType } from "libphonenumber-js"
import { z } from "zod"

const PhoneValidator = z
  .string()
  .min(1, "field-required")
  .transform((value, ctx) => {
    const asYouType = new AsYouType()
    asYouType.input(value)

    const number = asYouType.getNumber()
    const possible = number?.getPossibleCountries()

    if (!number?.isValid() || possible?.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "phone-invalid"
      })

      return z.NEVER
    }

    return number.number as string
  })

const SignUpFormSchema = z
  .object({
    first_name: z.string().min(2, { message: "first-name-min" }),
    last_name: z.string().min(2, { message: "last-name-min" }),
    email: z
      .string()
      .min(1, { message: "email-min" })
      .email({ message: "email-invalid" }),
    phone: PhoneValidator,
    password: z
      .string()
      .min(1, { message: "password-min" })
      .min(8, { message: "password-too-short" }),
    password_confirm: z.string(),
    tools: z.string().refine(
      (value) => {
        try {
          const toolsObj = JSON.parse(value)
          return Object.values(toolsObj).some((val) => val === true)
        } catch {
          return false
        }
      },
      {
        message: "tools-required"
      }
    ),
    terms_and_conditions: z.boolean().refine((value) => value === true, {
      message: "terms-and-conditions-required"
    })
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password_confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwords-not-match",
        path: ["password_confirm"]
      })
    }
  })

const SignInFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "email-min" })
    .email({ message: "email-invalid" }),
  password: z
    .string()
    .min(1, { message: "password-min" })
    .min(8, { message: "password-too-short" })
})

const SetNewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "password-min" })
      .min(8, { message: "password-too-short" }),
    password_confirm: z.string()
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "passwords-not-match",
    path: ["password_confirm"]
  })

export { SetNewPasswordSchema, SignInFormSchema, SignUpFormSchema }
