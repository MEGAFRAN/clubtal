import { InferGetStaticPropsType } from "next"
import getContentfulContent from "../../../app/services/headless/contentful/request-contentful"
import PostBody from "../../../app/components/sections/content_post/PostBody"
import styles from "../../../app/styles/layouts/postDetail.module.scss"

export const getStaticPaths = async () => {
  const response = await getContentfulContent("blogPost")

  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { items } = await getContentfulContent("blogPost", params.slug)

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  }
}
const DetailPost = ({ blogPost }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.container}>
    <header>
      <h1>{blogPost.fields.title as string}</h1>
    </header>
    <PostBody content={blogPost.fields.body as string} />
  </div>
)

export default DetailPost
