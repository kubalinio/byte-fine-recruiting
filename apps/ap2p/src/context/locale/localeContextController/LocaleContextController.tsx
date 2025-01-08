import { useState } from "react";
import { IntlProvider } from "react-intl";

import { AppLocale } from "../AppLocale.enum";
import { defaultLocale } from "../defaultLocale";
import { LocaleContext } from "../localeContext/LocaleContext";

import { LocaleContextControllerProps } from "./LocaleContextController.types";
import { translations } from "../../../i18n/messages";

export const LocaleContextController = ({
  children,
}: LocaleContextControllerProps) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={translations[locale]}
    >
      <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};
