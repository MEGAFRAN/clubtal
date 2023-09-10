import getContentfulContent from "../app/services/headless/contentful/request-contentful"
import { getCategoryList } from "./companies"

/* eslint-disable import/prefer-default-export */
export const getStaticPropsIndexContent = async () => {
  const response = await getContentfulContent("index")
  const categories = await getCategoryList()

  return {
    props: {
      data: response.items[0].fields,
      categories,
    },
    revalidate: 1,
  }
}
