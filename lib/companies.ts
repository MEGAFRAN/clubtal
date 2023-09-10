import { groq } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import client from "../sanity/lib/client"

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
    phone,
    whatsapp,
    instagram,
    facebook,
    twitter,
    youtube,
    tiktok
  }`

  const item = await client.fetch(itemQuery, { slug: companySlug })

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
    revalidate: 1,
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
