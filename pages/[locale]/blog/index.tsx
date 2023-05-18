import type { NextPage } from "next"
import styles from "../../../app/styles/pages/blog.module.scss"
import { makeStaticProps, getStaticPaths } from "../../../lib/getStatic"

// export interface BlogPageProps {
//   listPost: Post[]
// }

const BlogPage: NextPage = () => (
  <div className={styles.container}>
    <header>
      <h1>Blog clubtal</h1>
    </header>
  </div>
)

export default BlogPage
const getStaticProps = makeStaticProps({ ns: ["common"] })
export { getStaticPaths, getStaticProps }
