import { AxiosInstance } from "axios"

import {
  SignInMutationArgs,
  SignInMutationResponse,
  SignUpMutationArgs
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
    }
}

export const refreshTokenUrl = `${BASE_URL}/auth/jwt/refresh`
