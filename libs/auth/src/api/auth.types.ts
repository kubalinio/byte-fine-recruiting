import { z } from "zod"

import {
  ResetPasswordFormSchema,
  SignInFormSchema,
  SignUpFormSchema,
  UpdateUserFormSchema
} from "./auth.validators"

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>
export type SignUpMutationArgs = z.infer<typeof SignUpFormSchema>

export type SignInFormTypes = z.infer<typeof SignInFormSchema>
export type SignInMutationArgs = z.infer<typeof SignInFormSchema>
export type SignInMutationResponse = {
  access_token: string
  refresh_token: string
  token_type: string
}

export type ResetPasswordFormTypes = z.infer<typeof ResetPasswordFormSchema>

export type ResetPasswordMutationArgs = {
  token: string
  password: string
}

export type UpdateUserFormTypes = z.infer<typeof UpdateUserFormSchema>
export type UpdateUserMutationArgs = UpdateUserFormTypes

export type GetMeQueryResponse = {
  first_name?: string
  last_name?: string
  email: string
  phone?: string
  avatar?: string | null
}

export type User = {
  id: string
  name: string
}

export type GetUsersResponse = {
  users: User[]
  nextPage?: number | null
}

export type GetUsersInfiniteArgs = {
  count?: string
}

export type GetUsersListArgs = {
  page?: string
}

export type RefreshTokenMutationResponse = {
  access_token: string
  refresh_token: string
}

// API_ACTION_TYPES
