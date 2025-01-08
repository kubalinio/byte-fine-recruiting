import {
  GetMeQueryResponse,
  LoginMutationArguments,
} from "../../api/auth.types";
import { AuthState } from "../auth-reducer/auth-reducer.types";

export type AuthContextValue = AuthState & {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  login: ({ password, username }: LoginMutationArguments) => void;
  logout: VoidFunction;
  user: GetMeQueryResponse | undefined;
};
