import { ComponentsProps } from "../../constants/types/components_MDX/types"

function H1({ children }: ComponentsProps) {
  return <h1 className="mdx-h1">{children}</h1>
}

export default H1
