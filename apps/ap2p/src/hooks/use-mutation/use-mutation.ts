import {
  useMutation as useRQMutation,
  UseMutationOptions,
  MutationKey,
} from "@tanstack/react-query";

import {
  ExtendedQueryMeta,
  StandardizedApiError,
  useApiClient,
} from "@ap2p/api-client";

// import { DataForMutation, GetMutationParams } from './use-mutation.types';
import {
  AxiosMutationsType,
  mutations,
  DataForMutation,
  GetMutationParams,
} from "@ap2p/auth";

/**
 * Mutating data using this hook doesn't require specifying mutation function like it is required in react-query
 * @see https://react-query.tanstack.com/guides/mutations
 * This hook uses proper mutating strategy provided via ApiClientContext
 * @see ApiClientContextController.ts
 * */

export const useMutation = <
  Key extends keyof AxiosMutationsType,
  TError = StandardizedApiError
>(
  mutation: Key,
  options?: Omit<
    UseMutationOptions<DataForMutation<Key>, TError, GetMutationParams<Key>>,
    "mutationKey" | "mutationFn"
  > & {
    meta?: Partial<ExtendedQueryMeta>;
  }
) => {
  const { client } = useApiClient();
  const mutationFn = mutations[mutation](client);
  const mutationKey: MutationKey = [mutation];

  return useRQMutation({
    mutationKey,
    mutationFn: async (args) =>
      (await mutationFn(args)) as DataForMutation<Key>,
    ...options,
  });
};
