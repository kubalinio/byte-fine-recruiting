import { AxiosInstance } from "axios";

import {
  LoginMutationArguments,
  LoginMutationResponse,
  // MUTATION_TYPE_IMPORTS
} from "./auth.types";

export const BASE_URL = import.meta.env.VITE_API_URL;

export const authMutations = {
  loginMutation:
    (client: AxiosInstance) => async (body: LoginMutationArguments) => {
      return (await client.post<LoginMutationResponse>("/authorize", body))
        .data;
    },
  // MUTATION_FUNCTIONS_SETUP
};

export const refreshTokenUrl = `${BASE_URL}/users/refresh-token`;
