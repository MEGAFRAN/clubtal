import { InferGetStaticPropsType } from "next"
import PostBody from "../../../app/components/sections/content_post/PostBody"
import styles from "../../../app/styles/layouts/postDetail.module.scss"
import { getStaticPathsBlogSlug, getStaticPropsBlogSlug } from "../../../lib/blog"

const getStaticPaths = getStaticPathsBlogSlug
const getStaticProps = getStaticPropsBlogSlug
export { getStaticPaths, getStaticProps }
const DetailPost = ({ blogPost }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.container}>
    <header>
      <h1>{blogPost.fields.title as string}</h1>
    </header>
    <PostBody content={blogPost.fields.body as string} />
  </div>
)

export default DetailPost
