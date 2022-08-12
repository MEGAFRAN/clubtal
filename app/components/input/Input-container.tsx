import { useState } from "react"
import { Input } from "./Input"

const InputContainer = () => {
  const [inputValue, setInputValue] = useState("")

  const textHandler = (event: any) => setInputValue(event.target.value)

  return <Input handleChange={textHandler} />
}

export default InputContainer
