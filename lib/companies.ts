import { groq } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import client from "../sanity/lib/client"
import { Company } from "../app/constants/interfaces/content_models/interfaces"

export const getStaticPathsItem: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)]{
      slug,
      "items": *[_type == slug.current]{
        "params": { "categories": slug.current, "companies": slug.current }
      }
    }`,
  )

  const flattenedPaths = paths.flatMap((category: any) => category.items)

  return {
    paths: flattenedPaths,
    fallback: "blocking",
  }
}

export const getStaticPropsItem: GetStaticProps = async ({ params }: any) => {
  const categorySlug = params?.categories ?? ""
  const companySlug = params?.companies ?? ""

  const itemQuery = groq`*[_type == "${categorySlug}" && slug.current == $slug][0]{
    title,
    name,
    description,
    slug,
    category,
    specialities,
    services,
    schedule,
    socialMedia,
    contact
  }`

  const item: Company = await client.fetch(itemQuery, { slug: companySlug })

  if (!item) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      data: { item },
    },
  }
}

export const getCategoryList = async () => {
  const categoryList = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)][]{
      title
    }`,
  )

  return categoryList.map((category: { title: string }) => category.title)
}
