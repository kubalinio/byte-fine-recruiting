import { render, screen } from "tests"

import { About } from "./about"

describe("About", () => {
  test("renders heading", async () => {
    render(<About />)
    const element = await screen.findByText(/About/)
    expect(element).toBeInTheDocument()
  })
})
