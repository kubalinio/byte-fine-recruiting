import {
  QueryFunction,
  QueryKey,
  UseQueryOptions as UseRQQueryOptions
} from "@tanstack/react-query"

import { AxiosInstance } from "axios"

import { ExtendedQueryMeta, StandardizedApiError } from "@ap2p/api-client"

export type UseQueryOptions<TQueryFnData, TError = StandardizedApiError> = Omit<
  UseRQQueryOptions<TQueryFnData, TError>,
  "queryFn"
> & {
  meta?: Partial<ExtendedQueryMeta>
  queryFn: (client: AxiosInstance) => QueryFunction<TQueryFnData, QueryKey>
}

export type GenericQueryOptions<
  TQueryFnData,
  TError = StandardizedApiError
> = Omit<UseQueryOptions<TQueryFnData, TError>, "queryKey" | "queryFn">
