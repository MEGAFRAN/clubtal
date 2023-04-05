import fs from "fs/promises"
import path from "path"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import ListCardPost from "../../app/components/list/card_post/ListCardPost"
import { Post } from "../../app/constants/types/components_props/types"
import HOME_TEXT from "../../app/services/pages/home-text"
import Navbar from "../../app/components/sections/above_fold/navbar/Navbar"
import styles from "../../app/styles/pages/blog.module.scss"

export interface BlogPageProps {
  listPost: Post[]
}
const postDirectory = path.join(process.cwd(), "post")

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const files = await fs.readdir(postDirectory)
  const promisesReadFiles = files.map(async (file) => {
    const fileDirectory = path.join(process.cwd(), `post/${file}`)
    const content = await fs.readFile(fileDirectory, "utf8")
    return JSON.parse(content)
  })
  const listPost = await Promise.all(promisesReadFiles)

  return {
    props: {
      listPost,
    },
  }
}
export default function BlogPage({ listPost }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { pathname } = router
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts } = currentLanguage

  return (
    <div className={styles.container}>
      <Navbar
        options={homeNavbarOptions}
        buttonText={ctaButtonTexts[0]}
        mail={""}
        withLanguageToggle={isHomePage}
      />
      <header>
        <h1>Blog clubtal</h1>
      </header>
      <main>
        <ListCardPost listPost={listPost} />
      </main>
    </div>
  )
}
