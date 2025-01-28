/* eslint-disable @typescript-eslint/no-explicit-any */

import { Unwrap } from "@ap2p/api-client"
import { AxiosMutationsType } from "@ap2p/auth"

export type DataForMutation<TMutationKey extends keyof AxiosMutationsType> =
  Unwrap<ReturnType<ReturnType<AxiosMutationsType[TMutationKey]>>>

export type GetMutationParams<Key extends keyof AxiosMutationsType> =
  ReturnType<AxiosMutationsType[Key]> extends (value: infer Params) => any
    ? Params extends Parameters<
        ReturnType<AxiosMutationsType[keyof AxiosMutationsType]>
      >[0]
      ? Params
      : any
    : never
