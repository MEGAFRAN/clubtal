import { SectionAboutPostProps } from "../../../constants/types/components_props/types"
export function SectionAboutPost({
  nameAuthor,
  datePost,
  readingTime,
  id = "section-about-post",
  className = "",
}: SectionAboutPostProps) {
  return (
    <section className={className} id={id}>
      <span>{nameAuthor}</span>|<span>{datePost}</span>|<span>{readingTime}</span>
    </section>
  )
}
