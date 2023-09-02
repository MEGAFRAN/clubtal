import PostBody from "../../../app/components/sections/content_post/PostBody"
import styles from "../../../app/styles/layouts/postDetail.module.scss"
import { getStaticPathsBlogSlug, getStaticPropsBlogSlug } from "../../../lib/blog"
import { BlogPostContent } from "../../../app/constants/types/content_models/types"
import PageHead from "../../../app/components/page_head/PageHead"

const getStaticProps = getStaticPropsBlogSlug
const getStaticPaths = getStaticPathsBlogSlug
export { getStaticPaths, getStaticProps }
const DetailPost = ({ blogPost }: BlogPostContent) => {
  const { summary, title, slug, body } = blogPost.fields
  return (
    <>
      <PageHead
        description={summary}
        title={title}
        locale={"es"}
        url={`https://www.siaki.co/blog/${slug}`}
      />
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
        </header>
        <PostBody content={body.content} />
      </div>
    </>
  )
}

export default DetailPost
