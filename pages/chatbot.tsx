import { useState } from "react"
import { NextPage } from "next"
import ChatBotSkeleton from "../app/components/chatbot_skeleton/ChatBotSkeleton"
import ColorPickerSelector from "../app/components/color_picker/ColorPicker"
import { ChatbotSkeletonColors } from "../app/constants/types/components_props/types"

const ChatBot: NextPage = () => {
  const [colors, setColors] = useState<ChatbotSkeletonColors>({
    one: "#ffffff",
    two: "#000000",
    three: "#e9e9e9",
    four: "#ffffff",
    five: "#42c2ff",
    six: "#ffffff",
    seven: "#2ab918",
  })

  const handleColorChange = (colorProperty: keyof ChatbotSkeletonColors, color: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [colorProperty]: color,
    }))
  }

  const colorKeys = Object.keys(colors) as (keyof ChatbotSkeletonColors)[]

  return (
    <>
      <div>Configura tu chatbot</div>
      {colorKeys.map((colorKey) => (
        <ColorPickerSelector
          key={colorKey}
          label={`Selecciona el color ${colorKey}`}
          initialHex={colors[colorKey]}
          onChange={(color) => handleColorChange(colorKey, color)}
        />
      ))}
      <ChatBotSkeleton colors={colors} />
    </>
  )
}

export default ChatBot
