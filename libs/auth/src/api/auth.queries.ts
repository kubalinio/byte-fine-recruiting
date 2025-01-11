import { AxiosInstance } from "axios"
import { stringify } from "qs"

import {
  infiniteQueryFactoryOptions,
  queryFactoryOptions
} from "../utils/query-factory-options"
import {
  GetMeQueryResponse,
  GetUsersInfiniteArgs,
  GetUsersListArgs,
  GetUsersResponse
} from "./auth.types"

const getCurrentUser = (client: AxiosInstance) => async () => {
  return (await client.get<GetMeQueryResponse>("/users/me")).data
}

const getUsersInfinite =
  (client: AxiosInstance, { count = "5" }: GetUsersInfiniteArgs) =>
  async ({ pageParam = "1" }) => {
    const queryParams = stringify(
      { page: pageParam, count },
      { addQueryPrefix: true }
    )
    return (
      await client.get<GetUsersResponse>(`/users/${queryParams}`, {
        baseURL: "mock"
      })
    ).data
  }

const getUsersList =
  (client: AxiosInstance, { page = "1" }: GetUsersListArgs) =>
  async () => {
    const queryParams = stringify({ page, count: 5 }, { addQueryPrefix: true })
    return (
      await client.get<GetUsersResponse>(`/users/${queryParams}`, {
        baseURL: "mock"
      })
    ).data
  }

export const authQueries = {
  all: () => ["users"],
  me: () =>
    queryFactoryOptions({
      queryKey: [...authQueries.all(), "me"],
      queryFn: getCurrentUser
    }),
  lists: () => [...authQueries.all(), "list"],
  list: (params: GetUsersListArgs) =>
    queryFactoryOptions({
      queryKey: [...authQueries.lists(), params],
      queryFn: (client) => getUsersList(client, params)
    }),
  listsInfinite: () => [...authQueries.lists(), "infinite"],
  listInfinite: (params: GetUsersInfiniteArgs) =>
    infiniteQueryFactoryOptions({
      queryKey: [...authQueries.listsInfinite(), params],
      queryFn: (client) => getUsersInfinite(client, params),
      initialPageParam: "1",
      getNextPageParam: ({ nextPage }) => nextPage?.toString()
    })
}
