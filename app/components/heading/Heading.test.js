import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Title from "./Heading"

describe("<Title />", () => {
  it("Tests that the function creates a default h1 heading component", () => {
    const { getByText } = render(<Title />)
    const defaultTitle = getByText("default title")
    expect(defaultTitle.tagName).toBe("H1")
  })

  it("Tests that the function creates a custom h1 heading component", () => {
    const { getByText } = render(<Title title="custom title" />)
    const customTitle = getByText("custom title")
    expect(customTitle.tagName).toBe("H1")
  })

  it("Tests that the function creates a custom h2 heading component", () => {
    const { getByText } = render(<Title title="custom title" headingType="h2" />)
    const customTitle = getByText("custom title")
    expect(customTitle.tagName).toBe("H2")
  })

  it("Tests that the function creates a custom h3 heading component", () => {
    const { getByText } = render(<Title title="custom title" headingType="h3" />)
    const customTitle = getByText("custom title")
    expect(customTitle.tagName).toBe("H3")
  })

  it("Tests that the function creates a custom h4 heading component", () => {
    const { getByText } = render(<Title title="custom title" headingType="h4" />)
    const customTitle = getByText("custom title")
    expect(customTitle.tagName).toBe("H4")
  })
})
