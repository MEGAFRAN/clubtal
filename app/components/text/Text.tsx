import { TextProps } from "../../constants/types/components_props/types"

export const Text = ({ text, alignment }: TextProps) => {
  return <p style={{ textAlign: alignment }}>{text}</p>
}

Text.defaultProps = {
  text: "default title",
}
