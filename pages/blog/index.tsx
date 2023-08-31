import styles from "../../app/styles/pages/blog.module.scss"
import ListCardPost from "../../app/components/list/card_post/ListCardPost"
import { getStaticPropsBlogIndex } from "../../lib/blog"
import { BlogIndexContent } from "../../app/constants/types/content_models/types"

const getStaticProps = getStaticPropsBlogIndex
export { getStaticProps }
const BlogIndexPage = ({ blogPosts }: BlogIndexContent) => (
  <div className={styles.container}>
    <header></header>
    <main>
      <ListCardPost listPost={blogPosts} />
    </main>
  </div>
)

export default BlogIndexPage
