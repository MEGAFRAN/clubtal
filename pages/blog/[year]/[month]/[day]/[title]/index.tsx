import { useRouter } from "next/router"
import path from "path"
import fs from "fs/promises"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import PostDetail from "../../../../../../app/components/templates/blog/postDetail/PostDetail"
import { Post } from "../../../../../../app/constants/types/components_props/types"
import useDate from "../../../../../../app/hook/useDate"
import HOME_TEXT from "../../../../../../app/services/pages/home-text"
import functionPost from "../../../../../../app/services/utils/blog/post"

interface PageTitleProps {
  post: Post | null
}
type PathType = {
  params: {
    year: string
    month: string
    day: string
    title: string
  }
}

const fileDirectory = path.join(process.cwd(), "post")

export const getStaticPaths = async () => {
  const files = await fs.readdir(fileDirectory)
  const filesReading = functionPost.getInformationFromFile(files)
  const fileRead: Post[] = await Promise.all(filesReading)
  const paths: PathType[] = fileRead.map((file) => {
    const { yearPost, monthPost, dayPost } = functionPost.getYearMonthDayFromString(file.data)
    const titlePost = file.title.toLowerCase().split(" ").join("-")
    return {
      params: {
        year: yearPost,
        month: monthPost,
        day: dayPost,
        title: titlePost,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageTitleProps> = async ({ params }) => {
  const year = params?.year
  const month = params?.month
  const day = params?.day
  const title = params?.title
  const files = await fs.readdir(fileDirectory)
  const filesReading = functionPost.getInformationFromFile(files)
  const filesRead: Post[] = await Promise.all(filesReading)
  const findFilesByYearMonthDayTitle = filesRead.find((file) => {
    const { yearPost, monthPost, dayPost } = functionPost.getYearMonthDayFromString(file.data)
    const titlePost = file.title.toLowerCase().split(" ").join("-")
    return yearPost === year && monthPost === month && dayPost === day && titlePost === title
  })
  const post1 = findFilesByYearMonthDayTitle ?? null

  return {
    props: {
      post: post1,
    },
  }
}

function PageTitle({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { getStringMonth, deleteCeroStart } = useDate()
  const { query, pathname } = router
  const { year, month, day } = query
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts, formText } = currentLanguage
  const numberMonth = Number(month)
  const stringMonth = getStringMonth(numberMonth).toLowerCase()
  const stringDay = String(day)
  const dayWithoutCeroStart = deleteCeroStart(stringDay)
  const datePost = `${stringMonth} ${dayWithoutCeroStart} ${year}`
  return post ? (
    <PostDetail
      options={homeNavbarOptions}
      buttonText={ctaButtonTexts[0]}
      mail="info@clubtal.com"
      withLanguageToggle={isHomePage}
      titlePost={post.title}
      nameAuthor={post.nameAuthor}
      datePost={datePost}
      readingTime={post.readingTime}
      contentPost={post.contentPost}
      text={formText}
    />
  ) : null
}

export default PageTitle
