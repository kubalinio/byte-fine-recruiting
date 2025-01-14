import axiosClient from "libs/core/api-client/src/axios"
import { act, render, screen } from "tests"

import { LocaleContext } from "../../../context/locale/localeContext/LocaleContext"
import { Home } from "../../../routes/-components/Home"

const response = { status: 200, data: {} }
vitest.spyOn(axiosClient, "get").mockResolvedValue(response)

describe("Home", () => {
  test("renders heading", async () => {
    render(<Home />)
    const element = await screen.findByText(/Home/)
    expect(element).toBeInTheDocument()
  })

  test('changes locale when "here" button is clicked', async () => {
    render(
      <LocaleContext.Consumer>
        {(value) => (
          <>
            <span>LOCALE: {value?.locale}</span>
            <Home />
          </>
        )}
      </LocaleContext.Consumer>
    )

    const initialText = (await screen.findByText(/LOCALE/))
      .textContent as string

    act(() => screen.getByText(/here/).click())

    expect(await screen.findByText(/LOCALE/)).not.toHaveTextContent(initialText)

    act(() => screen.getByText(/here/).click())

    expect(await screen.findByText(/LOCALE/)).toHaveTextContent(initialText)
  })
})
