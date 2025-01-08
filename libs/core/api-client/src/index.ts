import { QueryMeta } from "@tanstack/react-query";
import axiosClient from "./axios";

type Unwrap<T> = T extends PromiseLike<infer U> ? U : T;

type ExtendedQueryMeta = QueryMeta & {
  error: { excludedCodes: number[]; showGlobalError: boolean };
};

export * from "./context/apiClientContextController/ApiClientContextController";
export * from "./context/apiClientContextController/ApiClientContextController.types";

export * from "./context/apiClientContext/ApiClientContext";
export * from "./context/apiClientContext/ApiClientContext.types";

export * from "./context/apiClientContextController/apiError/apiError";
export * from "./context/apiClientContextController/apiError/apiError.types";

export * from "./hooks/useApiClient/useApiClient";

export * from "./axios";

export { axiosClient, ExtendedQueryMeta, Unwrap };
