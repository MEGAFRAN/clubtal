import React from "react"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import Header from "../app/components/sections/above_fold/header/Header"
import FeedbackForm from "../app/components/feedback/FeedbackForm"
import { IndexContent } from "../app/constants/types/content_models/types"
import Search from "../app/components/search/Search"

const getStaticProps = getStaticPropsIndexContent
export { getStaticProps }
const Home = ({ data, categories }: IndexContent) => {
  const { metadata } = data

  return (
    <>
      <PageHead
        description={metadata.description}
        title={metadata.title}
        locale={metadata.locale}
        url={metadata.url}
      />
      <Search options={categories} />
    </>
  )
}

export default Home
