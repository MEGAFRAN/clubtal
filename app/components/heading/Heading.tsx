import { HeadingProps } from "../../constants/types/components_props/types"

export const Title = ({
  title = "default title",
  headingType = "h1",
}: HeadingProps) => {
  let createHeading =
    headingType === "h1" ? (
      <h1> {title} </h1>
    ) : headingType === "h2" ? (
      <h2> {title} </h2>
    ) : headingType === "h3" ? (
      <h3> {title} </h3>
    ) : (
      <h4> {title} </h4>
    )

  return (
    <div className="title-container" data-headingType={headingType}>
      {createHeading}
    </div>
  )
}
