import getContentfulContent from "../app/services/headless/contentful/request-contentful"

export const getStaticPathsCategoriesSlug = async () => {
  const response = await getContentfulContent("categories")

  const paths: any = response.items.map((item) => ({
    params: { categories: item.fields.slug },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticPropsCategoriesSlug = async ({ params }: any) => {
  const { items } = await getContentfulContent("categories", params.slug)

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { category: items[0] },
    revalidate: 1,
  }
}
