import { useRouter } from "next/router"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"
import path from "path"
import fs from "fs/promises"
import { Post } from "../../../../../app/constants/types/components_props/types"
import HOME_TEXT from "../../../../../app/services/pages/home-text"
import Navbar from "../../../../../app/components/sections/above_fold/navbar/Navbar"
import useDate from "../../../../../app/hook/useDate"
import functionPost from "../../../../../app/services/utils/blog/post"
import ListCardPost from "../../../../../app/components/list/card_post/ListCardPost"
import styles from "../../../../../app/styles/pages/blogDay.module.scss"

interface PageDayProps {
  listPost: Post[]
}

type PathType = {
  params: {
    year: string
    month: string
    day: string
  }
}

const postDirectory = path.join(process.cwd(), "post")

export const getStaticPaths = async () => {
  const files = await fs.readdir(postDirectory)
  const paths: PathType[] = files.map((file) => {
    const fileWithoutExtension = file.replace(/\.json$/, "")
    const { yearPost, monthPost, dayPost } =
      functionPost.getYearMonthDayFromString(fileWithoutExtension)
    return {
      params: {
        year: yearPost,
        month: monthPost,
        day: dayPost,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageDayProps> = async ({ params }) => {
  const year = params?.year
  const month = params?.month
  const day = params?.day
  const files = await fs.readdir(postDirectory)
  const promiseFilterFilesByYearMonthDay = files
    .filter((file) => {
      const fileWithoutExtension = file.replace(/\.json$/, "")
      const { yearPost, monthPost, dayPost } =
        functionPost.getYearMonthDayFromString(fileWithoutExtension)
      return yearPost === year && monthPost === month && dayPost === day
    })
    .map(async (file) => {
      const fileDirectory = await path.join(process.cwd(), `post/${file}`)
      const contentFile = await fs.readFile(fileDirectory, "utf-8")
      return JSON.parse(contentFile)
    })
  const listPost = await Promise.all(promiseFilterFilesByYearMonthDay)
  return {
    props: {
      listPost,
    },
  }
}

function PageDay({ listPost }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { getStringMonth, deleteCeroStart } = useDate()
  const { query, pathname } = router
  const { year, month, day } = query
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts } = currentLanguage
  const numberMonth = Number(month)
  const stringMonth = getStringMonth(numberMonth).toLowerCase()
  const stringDay = String(day)
  const dayWithoutCeroStart = deleteCeroStart(stringDay)

  return (
    <div className={styles.container}>
      <Navbar
        options={homeNavbarOptions}
        buttonText={ctaButtonTexts[0]}
        mail={"info@clubtal.com"}
        withLanguageToggle={isHomePage}
      />
      <header>
        <h1>{`Día: ${dayWithoutCeroStart} de ${stringMonth} de ${year}`}</h1>
        <div>
          <Link href={"/blog"}>Blog</Link> / <Link href={`/blog/${year}`}>{year}</Link> /{" "}
          <Link href={`/blog/${year}/${month}`}>{month}</Link> / <span>{day}</span>
        </div>
      </header>
      <main>
        <ListCardPost listPost={listPost} />
      </main>
    </div>
  )
}

export default PageDay
