import { StandardizedApiError } from "@ap2p/api-client"

import { UseInfiniteQueryOptions } from "../../hooks/useInfiniteQuery/useInfiniteQuery.types"
import { UseQueryOptions } from "../../hooks/useQuery/useQuery.types"

export const queryFactoryOptions = <
  TQueryFnData = unknown,
  TError = StandardizedApiError
>(
  options: UseQueryOptions<TQueryFnData, TError>
) => options

export const infiniteQueryFactoryOptions = <
  TQueryFnData = unknown,
  TPageParam = unknown,
  TError = StandardizedApiError
>(
  options: UseInfiniteQueryOptions<TQueryFnData, TError, TPageParam>
) => options
