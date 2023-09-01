import getContentfulContent from "../app/services/headless/contentful/request-contentful"

export const getStaticPathsSubCategoriesSlug = async () => {
  const response = await getContentfulContent("subcategories")

  const paths: any = response.items.map((item) => ({
    params: { subCategory: item.fields.slug },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticPropsSubCategoriesSlug = async ({ params }: any) => {
  const { items } = await getContentfulContent("subcategories", params.slug)

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { subCategory: items[0] },
    revalidate: 1,
  }
}
