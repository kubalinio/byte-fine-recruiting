import { StandardizedApiError } from "@ap2p/api-client";
import {
  UseInfiniteQueryOptions as UseInfiniteRQQueryOptions,
  InfiniteData,
  QueryFunction,
  QueryKey,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { ExtendedQueryMeta } from "../types";

type UseInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = StandardizedApiError,
  TPageParam = unknown
> = Omit<
  UseInfiniteRQQueryOptions<
    TQueryFnData,
    TError,
    InfiniteData<TQueryFnData>,
    TQueryFnData,
    QueryKey,
    TPageParam
  >,
  "queryFn"
> & {
  meta?: Partial<ExtendedQueryMeta>;
  queryFn: (
    client: AxiosInstance
  ) => QueryFunction<TQueryFnData, QueryKey, TPageParam>;
};

// Current
export const queryFactoryOptions = <
  TQueryFnData = unknown,
  TError = StandardizedApiError
>(
  options: UseQueryOptions<TQueryFnData, TError>
) => options;

export const infiniteQueryFactoryOptions = <
  TQueryFnData = unknown,
  TPageParam = unknown,
  TError = StandardizedApiError
>(
  options: UseInfiniteQueryOptions<TQueryFnData, TError, TPageParam>
) => options;
