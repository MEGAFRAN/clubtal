import { groq } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import client from "../sanity/lib/client"

const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0]{
  title,
  description,
  slug
}`

export const getStaticPathsCategory: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)][]{
      "params": { "categories": slug.current }
    }`,
  )

  return { paths, fallback: "blocking" }
}

export const getStaticPropsCategory: GetStaticProps = async ({ params }: any) => {
  const queryParams = { slug: params?.categories ?? "" }
  const dynamicItemQuery = (
    categoryTitle: string,
  ) => groq`*[_type == "${categoryTitle}" && defined(slug.current)]{
    title,
    description,
    slug,
    phone,
    whatsapp,
    website
  }`
  const category = await client.fetch(categoryQuery, queryParams)
  const items = await client.fetch(dynamicItemQuery(category.title))

  if (!category) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      data: {
        category,
        items,
      },
    },
    revalidate: 1,
  }
}
