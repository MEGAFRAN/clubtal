import { useRouter } from "next/router"
import Link from "next/link"
import fs from "fs/promises"
import path from "path"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Post } from "../../../../app/constants/types/components_props/types"
import HOME_TEXT from "../../../../app/services/pages/home-text"
import ListCardPost from "../../../../app/components/list/card_post/ListCardPost"
import Navbar from "../../../../app/components/sections/above_fold/navbar/Navbar"
import styles from "../../../../app/styles/pages/blogCategory.module.scss"
import functionPost from "../../../../app/services/utils/blog/post"

type PathType = {
  params: {
    category: string
  }
}
interface CategoryPageProps {
  listPost: Post[]
}

const postDirectory = path.join(process.cwd(), "post")

export const getStaticPaths = async () => {
  const files = await fs.readdir(postDirectory)
  const filesReading = functionPost.getInformationFromFile(files)
  const filesRead: Post[] = await Promise.all(filesReading)

  const paths: PathType[] = filesRead.map((file) => {
    const categoryPost = file && file.category
    const categoryPostLowerCase = categoryPost.toLowerCase()
    return {
      params: {
        category: categoryPostLowerCase,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({ params }) => {
  const category = params?.category
  const files = await fs.readdir(postDirectory)
  const filesReading = functionPost.getInformationFromFile(files)
  const filesRead: Post[] = await Promise.all(filesReading)
  const filesFilterByCategory = filesRead.filter((file) => file.category.toLowerCase() === category)
  return {
    props: {
      listPost: filesFilterByCategory,
    },
  }
}

export default function CategoryPage({ listPost }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { pathname, query } = router
  const { category } = query
  const currentLanguage = { ...HOME_TEXT.spanish }
  const { ctaButtonTexts } = currentLanguage
  const nameCategory = String(category).charAt(0).toUpperCase() + String(category).slice(1)
  const isHomePage = pathname === "/"
  return (
    <div className={styles.container}>
      <Navbar
        buttonText={ctaButtonTexts}
        mail={"info@clubtal.com"}
        withLanguageToggle={isHomePage}
      />
      <header>
        <h1>{nameCategory}</h1>
        <div>
          <Link href={"/blog"}>Blog</Link> / <span role="paragraph">{nameCategory}</span>
        </div>
      </header>
      <main>
        <ListCardPost listPost={listPost} />
      </main>
    </div>
  )
}
