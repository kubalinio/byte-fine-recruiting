import { QueryMeta } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

type MutationHTTPMethod = "DELETE" | "POST" | "PUT" | "PATCH";

type Unwrap<T> = T extends PromiseLike<infer U> ? U : T;

type ExtendedQueryMeta = QueryMeta & {
  error: { excludedCodes: number[]; showGlobalError: boolean };
};

type ExtendedAxiosRequestConfig = AxiosRequestConfig & {
  _retry?: boolean;
};

export {
  ExtendedAxiosRequestConfig,
  ExtendedQueryMeta,
  MutationHTTPMethod,
  Unwrap,
};

export * from "./apiError/apiError";
export * from "./apiError/apiError.types";
