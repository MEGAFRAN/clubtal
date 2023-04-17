import React, { useState } from "react"
import { SketchPicker } from "react-color"
import { ColorPickerProps } from "../../constants/types/components_props/types"

const ColorPicker = ({ label = "selecciona el color", initialHex, onChange }: ColorPickerProps) => {
  const [currentColor, setCurrentColor] = useState({ hex: initialHex })
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleChange = (color: any) => {
    setCurrentColor(color)
    onChange(color.hex)
  }

  const handleClick = () => setShowColorPicker(!showColorPicker)

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={handleClick}
        data-testid="container"
      >
        {label && <label htmlFor="color-picker-input">{label}</label>}
        <div
          aria-label="Color preview"
          role="presentation"
          style={{ width: "24px", height: "24px", backgroundColor: currentColor.hex }}
        />
        <span style={{ margin: "0 8px" }}>&#x25BE;</span>
        <input
          type="text"
          value={currentColor.hex}
          aria-label="Color picker input"
          role="colorPickerInput"
          data-testid="color-input"
        />
      </div>
      {showColorPicker && <SketchPicker color={currentColor.hex} onChange={handleChange} />}
    </div>
  )
}

export default ColorPicker
