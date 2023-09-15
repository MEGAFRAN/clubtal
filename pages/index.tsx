import React from "react"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import { IndexContent } from "../app/constants/types/content_models/types"
import HeaderSearch from "../app/components/sections/above_fold/header_search/HeaderSearch"

const getStaticProps = getStaticPropsIndexContent
export { getStaticProps }
const Home = ({ homePageData, categories }: IndexContent) => {
  const { metaDescription, headerTitle } = homePageData

  return (
    <>
      <PageHead
        description={metaDescription}
        title={"siaki"}
        locale={"es"}
        url={"https://www.siaki.co"}
      />
      <HeaderSearch categories={categories} title={headerTitle} text="" />
    </>
  )
}

export default Home
