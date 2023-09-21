import { groq } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import { Company } from "../app/constants/interfaces/content_models/interfaces"
import client from "./sanity/client"

export const getStaticPathsItem: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`
      *[_type == "category" && defined(slug.current)]{
        "categorySlug": slug.current,
        "companies": companies[]->slug.current
      }
    `,
  )

  const flattenedPaths = paths.flatMap((category: any) =>
    category.companies.map((companySlug: string) => ({
      params: {
        categories: category.categorySlug,
        companies: companySlug,
      },
    })),
  )

  return {
    paths: flattenedPaths,
    fallback: false,
  }
}

export const getStaticPropsItem: GetStaticProps = async ({ params }: any) => {
  const categorySlug = params?.categories ?? ""
  const companySlug = params?.companies ?? ""

  const companyQuery = groq`
    *[_type == "company" && slug.current == $companySlug && category->slug.current == $categorySlug][0]{
      isPaidUser,
      _id,
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
    }
  `

  const company: Company = await client.fetch(companyQuery, { companySlug, categorySlug })

  if (!company) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      data: { company },
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
