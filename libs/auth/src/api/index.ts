import { authMutations } from "./auth.mutations";

export const mutations = {
  ...authMutations,
  // API_COLLECTION_MUTATIONS
} as const;

export type AxiosMutationsType = typeof mutations;
