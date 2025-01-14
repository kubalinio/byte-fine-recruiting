import { GetMeQueryResponse, SignInMutationArgs } from "../../api/auth.types"
import { AuthState } from "../auth-reducer/auth-reducer.types"

export type AuthContextValue = AuthState & {
  isAuthenticated: boolean
  isAuthenticating: boolean
  login: ({ password, username }: SignInMutationArgs) => void
  logout: VoidFunction
  user: GetMeQueryResponse | undefined
}
