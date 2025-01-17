import { AxiosInstance } from "axios"

import {
  ResetPasswordMutationArgs,
  SignInMutationArgs,
  SignInMutationResponse,
  SignUpMutationArgs,
  UpdateUserMutationArgs
  // MUTATION_TYPE_IMPORTS
} from "./auth.types"

// export const BASE_URL = import.meta.env.VITE_API_URL;
export const BASE_URL = "http://localhost:8000"

export const authMutations = {
  signInMutation:
    (client: AxiosInstance) => async (body: SignInMutationArgs) => {
      const data = new URLSearchParams(
        body as Record<string, string>
      ).toString()

      return (
        await client.post<SignInMutationResponse>("/auth/jwt/login", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
      ).data
    },

  signUpMutation:
    (client: AxiosInstance) => async (data: SignUpMutationArgs) => {
      const response = await client.post("/auth/register", data)
      return response.data
    },

  resetPasswordMutation:
    (client: AxiosInstance) => async (data: ResetPasswordMutationArgs) => {
      const response = await client.post("/auth/reset-password", data)

      return response.data
    },

  updateUserMutation:
    (client: AxiosInstance) => async (data: UpdateUserMutationArgs) => {
      const response = await client.patch("/users/me", data)
      return response.data
    }
}

export const refreshTokenUrl = `${BASE_URL}/auth/jwt/refresh`
