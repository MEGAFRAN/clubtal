import { ComponentsProps } from "../../constants/types/components_MDX/types"

function H2({ children }: ComponentsProps) {
  return <h2 className="mdx-h2">{children}</h2>
}

export default H2
