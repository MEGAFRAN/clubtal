import { InferGetStaticPropsType } from "next"
import { getStaticPathsEs, makeStaticProps } from "../../../../lib/getStaticPostDetail"
import PostBody from "../../../../app/components/sections/content_post/PostBody"
import styles from "../../../../app/styles/layouts/postDetail.module.scss"

// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["common"]
const getStaticProps = makeStaticProps({ ns })
// getStaticPathsEs ---> generate only paths of locale es of the all posts
const getStaticPaths = getStaticPathsEs
export { getStaticPaths, getStaticProps }

const DetailPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.container}>
    <header>
      <h1>{post.title}</h1>
    </header>
    <PostBody content={post.content} />
  </div>
)

export default DetailPost
