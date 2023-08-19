import { InferGetStaticPropsType } from "next"
import styles from "../../app/styles/pages/blog.module.scss"
import ListCardPost from "../../app/components/list/card_post/ListCardPost"
import { getStaticPropsBlogIndex } from "../../lib/blog"

const getStaticProps = getStaticPropsBlogIndex
export { getStaticProps }
const BlogPage = ({ blogPosts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.container}>
    <header></header>
    <main>
      <ListCardPost listPost={blogPosts} />
    </main>
  </div>
)

export default BlogPage
