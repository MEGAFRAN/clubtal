import { InferGetStaticPropsType } from "next"
import { createClient } from "contentful"
import PostBody from "../../../../app/components/sections/content_post/PostBody"
import styles from "../../../../app/styles/layouts/postDetail.module.scss"
import getContentfulContent from "../../../../app/services/headless/contentful/request-contentful"

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
const DetailPost = ({ blogPost }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(blogPost)
  return <div className={styles.container}></div>
}

export default DetailPost
