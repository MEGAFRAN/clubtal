import { InferGetStaticPropsType } from "next"
import { createClient } from "contentful"
import styles from "../../../app/styles/pages/blog.module.scss"
import ListCardPost from "../../../app/components/list/card_post/ListCardPost"

export async function getStaticProps() {
  const client = createClient({
    space: "nozgp99vznh9",
    accessToken: "iIQdZOSPfioIIWWbaVSZxmej6BGMNAQnLtnpRVeyOvE",
  })

  const res = await client.getEntries({ content_type: "blogPost" })

  return {
    props: {
      blogPosts: res.items,
    },
    revalidate: 1,
  }
}

const BlogPage = ({ blogPosts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.container}>
    <header></header>
    <main>
      <ListCardPost listPost={blogPosts} />
    </main>
  </div>
)

export default BlogPage
