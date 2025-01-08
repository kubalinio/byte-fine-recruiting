import { useMemo } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ApiClientContext } from "../apiClientContext/ApiClientContext";
import { ApiClientContextValue } from "../apiClientContext/ApiClientContext.types";
// import { useHandleQueryErrors } from '../../../hooks/useHandleQueryErrors/useHandleQueryErrors';
// import { ExtendedQueryMeta } from '../../../../../../apps/ap2p/src/api/types/types';

import { ApiClientControllerProps } from "./ApiClientContextController.types";
import { StandardizedApiError } from "./apiError/apiError.types";
import axiosClient from "../../axios";

const metaErrorConfig = { error: { showGlobalError: true, excludedCodes: [] } };

export const ApiClientContextController = ({
  children,
}: ApiClientControllerProps) => {
  // const { handleErrors, shouldHandleGlobalError } = useHandleQueryErrors();

  const mutationCache = new MutationCache({
    onError: (err, variables, context, mutation) => {
      const error = err as StandardizedApiError;
      // shouldHandleGlobalError((mutation.meta as ExtendedQueryMeta)?.error, error?.statusCode) && handleErrors(error);
    },
  });

  const queryCache = new QueryCache({
    onError: (err, query) => {
      const error = err as StandardizedApiError;

      // shouldHandleGlobalError((query.meta as ExtendedQueryMeta)?.error, error?.statusCode) && handleErrors(error);
    },
  });

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, meta: metaErrorConfig },
        },
        mutationCache,
        queryCache,
      }),
    []
  );

  const ctx: ApiClientContextValue = { client: axiosClient };

  return (
    <ApiClientContext.Provider value={ctx}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
