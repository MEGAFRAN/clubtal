import React from "react"
import { SectionCardPostProps } from "../../../constants/types/components_props/types"
import SectionAboutPost from "../about_post/SectionAboutPost"
import LinkNavigation from "../../link_navigation/LinkNavigation"

export default function SectionCardPost({
  className,
  nameAuthor,
  hrefTitle,
  title,
  description,
  hrefFooter,
}: SectionCardPostProps) {
  return (
    <section role={"article"} className={className}>
      <h2>
        <LinkNavigation href={hrefTitle}>{title}</LinkNavigation>
      </h2>
      <SectionAboutPost nameAuthor={nameAuthor} />
      <p role={"definition"}>{description}</p>
      <footer>
        <LinkNavigation href={hrefFooter}>Leer</LinkNavigation>
      </footer>
    </section>
  )
}
