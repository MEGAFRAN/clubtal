import { HeadingProps } from "../../constants/types/components_props/types"

const Title = ({ title = "default title", headingType = "h1" }: HeadingProps) => {
  let createHeading
  switch (headingType) {
    case "h1":
      createHeading = <h1>{title}</h1>
      break
    case "h2":
      createHeading = <h2>{title}</h2>
      break
    case "h3":
      createHeading = <h3>{title}</h3>
      break
    default:
      createHeading = <h4>{title}</h4>
      break
  }

  return (
    <div className="title-container" data-headingtype={headingType}>
      {createHeading}
    </div>
  )
}

export default Title
