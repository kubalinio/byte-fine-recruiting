import { AxiosRequestConfig } from "axios";

type MutationHTTPMethod = "DELETE" | "POST" | "PUT" | "PATCH";

type ExtendedAxiosRequestConfig = AxiosRequestConfig & {
  _retry?: boolean;
};

type RefreshTokenMutationResponse = {
  accessToken: string;
  refreshToken: string;
};

export {
  ExtendedAxiosRequestConfig,
  MutationHTTPMethod,
  RefreshTokenMutationResponse,
};

export * from "./apiError/apiError";
export * from "./apiError/apiError.types";
