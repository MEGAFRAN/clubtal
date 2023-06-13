import { InferGetStaticPropsType } from "next"
import { useTranslation } from "next-i18next"
import styles from "../../../app/styles/pages/blog.module.scss"
import { makeStaticProps, getStaticPaths } from "../../../lib/getStaticAllPost"
import ListCardPost from "../../../app/components/list/card_post/ListCardPost"

// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["common"]
const getStaticProps = makeStaticProps({ ns })
export { getStaticPaths, getStaticProps }

const BlogPage = ({ listPost }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t: translate } = useTranslation()
  return (
    <div className={styles.container}>
      <header>
        <h1>Blog clubtal</h1>
        <h2>{translate("name-subtile-blog")}</h2>
      </header>
      <main>
        <ListCardPost listPost={listPost} />
      </main>
    </div>
  )
}

export default BlogPage
