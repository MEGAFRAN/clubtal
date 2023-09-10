import { groq } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import client from "../sanity/lib/client"

export const getStaticPathsItem: GetStaticPaths = async () => {
  // This query fetches all items of all categories
  const paths = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)]{
      slug,
      "items": *[_type == slug.current]{
        "params": { "categories": slug.current, "companies": slug.current }
      }
    }`,
  )

  // Flatten paths to match the format Next.js expects
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
    description,
    slug
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
