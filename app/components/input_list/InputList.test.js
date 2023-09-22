// __tests__/InputList.test.tsx
import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import InputList from "./InputList"

describe("InputList", () => {
  const label = "Item"
  const values = ["value1", "value2"]
  const mockOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders the initial values", () => {
    render(<InputList label={label} values={values} onChange={mockOnChange} />)
    expect(screen.getByDisplayValue("value1")).toBeInTheDocument()
    expect(screen.getByDisplayValue("value2")).toBeInTheDocument()
  })

  it('adds a new empty input when "Add Item" button is clicked', () => {
    render(<InputList label={label} values={values} onChange={mockOnChange} />)
    fireEvent.click(screen.getByText(`Add ${label}`))
    expect(screen.getByDisplayValue("")).toBeInTheDocument()
  })

  it("updates the input value and triggers onChange", () => {
    render(<InputList label={label} values={values} onChange={mockOnChange} />)
    fireEvent.change(screen.getAllByRole("textbox")[0], { target: { value: "newValue1" } })
    expect(screen.getByDisplayValue("newValue1")).toBeInTheDocument()
    expect(mockOnChange).toHaveBeenCalledWith(["newValue1", "value2"])
  })
})
