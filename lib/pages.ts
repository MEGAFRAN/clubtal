import getContentfulContent from "../app/services/headless/contentful/request-contentful"

/* eslint-disable import/prefer-default-export */
export const getStaticPropsIndexContent = async () => {
  const response = await getContentfulContent("index")

  return {
    props: {
      data: response.items[0].fields,
    },
    revalidate: 1,
  }
}
