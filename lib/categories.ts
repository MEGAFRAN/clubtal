import { groq } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import { Category, Company } from "../app/constants/interfaces/content_models/interfaces"
import client from "./sanity/client"

const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0]{
  title,
  metaDescription,
  slug,
  companies[]->{
    title,
    slug,
    description,
    metaDescription,
    specialities,
    category,
    services,
    contact,
    schedule,
    socialMedia
  }
}`

export const getStaticPathsCategory: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)][]{
      "params": { "categories": slug.current }
    }`,
  )

  return { paths, fallback: false }
}

export const getStaticPropsCategory: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.categories ?? "" }
  const category: Category = await client.fetch(categoryQuery, queryParams)
  const company: Company[] = category.companies

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
        company,
      },
    },
  }
}
