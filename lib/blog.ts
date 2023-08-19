import getContentfulContent from "../app/services/headless/contentful/request-contentful"

export const getStaticPathsBlogSlug = async () => {
  const response = await getContentfulContent("blogPost")

  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticPropsBlogSlug = async ({ params }: any) => {
  const { items } = await getContentfulContent("blogPost", params.slug)

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  }
}

export const getStaticPropsBlogIndex = async () => {
  const response = await getContentfulContent("blogPost")

  return {
    props: {
      blogPosts: response.items,
    },
    revalidate: 1,
  }
}
