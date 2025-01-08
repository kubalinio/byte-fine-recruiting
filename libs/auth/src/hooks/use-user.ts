import { useQueryClient } from "@tanstack/react-query";

import { GenericQueryOptions } from "./use-query/use-query.types";
import { useQuery } from "./use-query/use-query";

import { GetMeQueryResponse } from "../api/auth.types";
import { authQueries } from "../api/auth.queries";

export const useUser = (options?: GenericQueryOptions<GetMeQueryResponse>) => {
  const queryClient = useQueryClient();

  const resetUser = () =>
    queryClient.removeQueries({ queryKey: authQueries.me().queryKey });

  const query = useQuery({ ...authQueries.me(), ...options });
  return { ...query, resetUser };
};
