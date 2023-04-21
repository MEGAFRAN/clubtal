import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ColorPicker from "./ColorPicker"

describe("<ColorPicker />", () => {

  it("Tests that the component renders with default props", () => {
    render(<ColorPicker initialHex="#FFFFFF" />)
    const colorPickerLabel = screen.getByText("selecciona el color")
    expect(colorPickerLabel).toBeInTheDocument()
  })

  it("Tests that the component renders with custom label and initialHex", () => {
    render(<ColorPicker label="custom label" initialHex="#000000" />)
    const colorPickerLabel = screen.getByText("custom label")
    expect(colorPickerLabel).toBeInTheDocument()
  })

})
