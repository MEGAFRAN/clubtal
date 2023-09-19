import { groq } from "next-sanity"
import type { SanityDocument } from "@sanity/client"
import Posts from "../../components/posts/Posts"
import client from "../../../lib/sanity/client"

export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`
export const getStaticProps = async () => {
  const data = await client.fetch(postsQuery)

  return { props: { data } }
}

export default function BlogIndexPage({ data }: { data: SanityDocument[] }) {
  return <Posts posts={data} />
}
