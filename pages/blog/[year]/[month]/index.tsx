import Link from "next/link"
import path from "path"
import fs from "fs/promises"
import { useRouter } from "next/router"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Navbar from "../../../../app/components/sections/above_fold/navbar/Navbar"
import HOME_TEXT from "../../../../app/services/pages/home-text"
import useDate from "../../../../app/hook/useDate"
import { Post } from "../../../../app/constants/types/components_props/types"
import functionPost from "../../../../app/services/utils/blog/post"
import ListCardPost from "../../../../app/components/list/card_post/ListCardPost"
import styles from "../../../../app/styles/pages/pageBlogMonth.module.scss"

type PathType = {
  params: {
    year: string
    month: string
  }
}
interface PageMonthProps {
  listPost: Post[]
}
const postDirectory = path.join(process.cwd(), "post")

export const getStaticPaths = async () => {
  const files = await fs.readdir(postDirectory)
  const paths: PathType[] = files.map((file) => {
    const fileWithoutExtension = file.replace(/\.json$/, "")
    const { yearPost, monthPost } = functionPost.getYearMonthDayFromString(fileWithoutExtension)
    return {
      params: {
        year: yearPost,
        month: monthPost,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<PageMonthProps> = async ({ params }) => {
  const year = params?.year
  const month = params?.month
  const files = await fs.readdir(postDirectory)
  const filterPromiseReadFilesByYearAndMonth = files
    .filter((file) => {
      const fileWithoutExtension = file.replace(/\.json$/, "")
      const { yearPost, monthPost } = functionPost.getYearMonthDayFromString(fileWithoutExtension)
      return year === yearPost && month === monthPost
    })
    .map(async (file) => {
      const fileDirectory = path.join(process.cwd(), `post/${file}`)
      const contentFile = await fs.readFile(fileDirectory, "utf8")
      return JSON.parse(contentFile)
    })
  const listPost = await Promise.all(filterPromiseReadFilesByYearAndMonth)
  return {
    props: {
      listPost,
    },
  }
}
export default function PageMonth({ listPost }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { getStringMonth } = useDate()
  const { pathname, query } = router
  const { year, month } = query
  const numberMonth = Number(month)
  const monthString = getStringMonth(numberMonth)
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanish }
  const { ctaButtonTexts } = currentLanguage

  return (
    <div className={styles.container}>
      <Navbar
        buttonText={ctaButtonTexts}
        mail={"info@clubtal.com"}
        withLanguageToggle={isHomePage}
      />
      <header>
        <h1>{`Mes: ${monthString} ${year}`}</h1>
        <div>
          <Link href={"/blog"}>Blog</Link> / <Link href={`/blog/${year}`}>{year}</Link> /
          <span>{month}</span>
        </div>
      </header>
      <main>
        <ListCardPost listPost={listPost} />
      </main>
    </div>
  )
}
