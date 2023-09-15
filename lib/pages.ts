import { groq } from "next-sanity"
import { getCategoryList } from "./companies"
import client from "../sanity/lib/client"
import { IndexContent } from "../app/constants/types/content_models/types"
import { Categories } from "../app/constants/types/components_props/types"

/* eslint-disable import/prefer-default-export */

export const getStaticPropsIndexContent = async () => {
  const homeQuery = groq`*[_type == "pages" && title == "home"][0]{
    title,
    metaDescription,
    headerTitle
  }`
  const homePageData: IndexContent = await client.fetch(homeQuery)
  const categories: Categories = await getCategoryList()

  return {
    props: {
      homePageData,
      categories,
    },
    revalidate: 1,
  }
}
