import { IntlProvider } from "react-intl";

import { renderHook } from "tests";

import { useLocale } from "./useLocale";

describe("useLocale", () => {
  test("throws when locale context is unavailable", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    const renderFn = () =>
      renderHook(() => useLocale(), {
        wrapper: ({ children }) => (
          <IntlProvider onError={() => undefined} locale="">
            {children}
          </IntlProvider>
        ),
      });
    expect(renderFn).toThrow(
      "LocaleContext is unavailable, make sure you are using LocaleContextController"
    );
  });
});
