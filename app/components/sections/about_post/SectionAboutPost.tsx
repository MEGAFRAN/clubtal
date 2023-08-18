import { SectionAboutPostProps } from "../../../constants/types/components_props/types"

function SectionAboutPost({
  nameAuthor,
  id = "section-about-post",
  className = "",
}: SectionAboutPostProps) {
  return (
    <section className={className} id={id}>
      <span>Autor: {nameAuthor}</span>
    </section>
  )
}
export default SectionAboutPost
