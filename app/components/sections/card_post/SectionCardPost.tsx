import React from "react"
import { useTranslation } from "next-i18next"
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
  const { t } = useTranslation()
  return (
    <section role={"article"} className={className}>
      <SectionAboutPost nameAuthor={nameAuthor} datePost={datePost} readingTime={readingTime} />
      <h2>
        <LinkNavigation href={hrefTitle}>{title}</LinkNavigation>
      </h2>
      <p role={"definition"}>{description}</p>
      <footer>
        <LinkNavigation href={hrefFooter}>{t("name-button-card")}</LinkNavigation>
      </footer>
    </section>
  )
}
