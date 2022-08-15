import { TextProps } from "../../constants/types/components_props/types"

export const Text = ({ text = "default title", alignment }: TextProps) => {
  return <p style={{ textAlign: alignment }}>{text}</p>
}
