import React from "react"
import { SectionCardPostProps } from "../../../constants/types/components_props/types"
import SectionAboutPost from "../about_post/SectionAboutPost"
import LinkNavigation from "../../link_navigation/LinkNavigation"

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
        <LinkNavigation href={hrefTitle}>{title}</LinkNavigation>
      </h2>
      <p role={"definition"}>{description}</p>
      <footer>
        <LinkNavigation href={hrefFooter}>Continuar leyendo</LinkNavigation>
      </footer>
    </section>
  )
}
