import { ApiClientContextController } from "@ap2p/api-client"
import { AuthContextController } from "@ap2p/auth"

import { LocaleContextController } from "../context/locale/localeContextController/LocaleContextController"
import { AppProvidersProps } from "./app-providers.types"

export const AppProviders = ({ children }: AppProvidersProps) => (
  <LocaleContextController>
    <ApiClientContextController>
      <AuthContextController>{children}</AuthContextController>
    </ApiClientContextController>
  </LocaleContextController>
)
