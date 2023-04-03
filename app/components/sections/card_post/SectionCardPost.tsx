import React from "react"
import { SectionCardPostProps } from "../../../constants/types/components_props/types"
import Link from "../../link/Link"
import SectionAboutPost from "../about_post/SectionAboutPost"

export default function SectionCardPost({
  className,
  nameAuthor,
  datePost,
  readingTime,
  hrefTitle,
  title,
  description,
  hrefFooter,
}: SectionCardPostProps) {
  return (
    <section role={"article"} className={className}>
      <SectionAboutPost nameAuthor={nameAuthor} datePost={datePost} readingTime={readingTime} />
      <h2>
        <Link href={hrefTitle}>{title}</Link>
      </h2>
      <p role={"definition"}>{description}</p>
      <footer>
        <Link href={hrefFooter}>Continuar leyendo</Link>
      </footer>
    </section>
  )
}
