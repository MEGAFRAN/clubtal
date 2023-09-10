import React from "react"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import { IndexContent } from "../app/constants/types/content_models/types"
import Search from "../app/components/search/Search"
import HeaderSearch from "../app/components/sections/above_fold/header_search/HeaderSearch"

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
      <HeaderSearch
        categories={categories}
        title="Encuentra lo que buscas"
        text=""
        buttonText={["siaki"]}
      />
    </>
  )
}

export default Home
