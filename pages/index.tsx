import React from "react"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import { IndexContent } from "../app/constants/types/content_models/types"
import HeaderSearch from "../app/components/sections/above_fold/header_search/HeaderSearch"
import { Company } from "../app/constants/interfaces/content_models/interfaces"
import cmsCrud from "../lib/sanity/crud/crud"
import BottomBar from "../app/components/bottomBar/BottomBar"

const getStaticProps = getStaticPropsIndexContent
export { getStaticProps }
const Home = ({ homePageData, categories }: IndexContent) => {
  const { metaDescription, headerTitle } = homePageData || {}

  return (
    <>
      <PageHead
        description={metaDescription}
        title={"siaki"}
        locale={"es"}
        url={"https://www.siaki.co"}
      />
      <HeaderSearch categories={categories} title={headerTitle} text="" />
      <BottomBar />
    </>
  )
}

export default Home
