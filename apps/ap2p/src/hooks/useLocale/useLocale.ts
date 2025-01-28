import { useCallback, useContext, useMemo } from "react"

import type { TranslateFn } from "../../i18n/messages"

import { useIntl } from "react-intl"

import { LocaleContext } from "../../context/locale/localeContext/LocaleContext"
import { UseLocaleReturnType } from "./useLocale.types"

export const useLocale: UseLocaleReturnType = () => {
  const intl = useIntl()
  const localeContext = useContext(LocaleContext)

  if (localeContext === undefined) {
    throw new Error(
      "LocaleContext is unavailable, make sure you are using LocaleContextController"
    )
  }

  const t: TranslateFn = useCallback(
    (id, value?) => intl.formatMessage({ id }, value),
    [intl]
  )

  return useMemo(
    () => ({
      ...intl,
      ...localeContext,
      t
    }),
    [intl, localeContext, t]
  )
}
