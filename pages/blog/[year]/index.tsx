import path from "path"
import fs from "fs/promises"
import React from "react"
import { useRouter } from "next/router"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import HOME_TEXT from "../../../app/services/pages/home-text"
import PostPage from "../../../app/components/templates/blog/postPage/PostPage"
import { BlogPageProps } from ".."

type PathType = {
  params: {
    year: string
  }
}
const postDirectory = path.join(process.cwd(), "post")
export const getStaticPaths = async () => {
  const files = await fs.readdir(postDirectory)
  const paths: PathType[] = files.map((file) => {
    const yearPost = file.slice(0, 4)
    return {
      params: {
        year: yearPost,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({ params }) => {
  const year = params?.year
  const files = await fs.readdir(postDirectory)
  const filterPromiseReadFilesByYear = files
    .filter((file) => {
      const yearPost = file.slice(0, 4)
      return yearPost === year
    })
    .map(async (file) => {
      const fileDirectory = path.join(process.cwd(), `post/${file}`)
      const contentFile = await fs.readFile(fileDirectory, "utf-8")
      return JSON.parse(contentFile)
    })
  const listPost = await Promise.all(filterPromiseReadFilesByYear)
  return {
    props: {
      listPost,
    },
  }
}
function Year({ listPost }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { pathname, query } = router
  const year = query?.year
  const numberYear = Number(year)
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanish }
  const { ctaButtonTexts } = currentLanguage

  return (
    <PostPage
      buttonText={ctaButtonTexts}
      mail={"info@clubtal.com"}
      withLanguageToggle={isHomePage}
      yearPost={numberYear}
      posts={listPost}
    />
  )
}

export default Year
