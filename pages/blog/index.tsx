import { groq } from "next-sanity"
import type { SanityDocument } from "@sanity/client"
import Posts from "../../app/components/posts/Posts"
import client from "../../sanity/lib/client"
import { getStaticPathsBlogSlug } from "../../lib/blog"

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
