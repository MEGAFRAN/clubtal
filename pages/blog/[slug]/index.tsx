import { SanityDocument } from "@sanity/client"
import styles from "../../../app/styles/layouts/postDetail.module.scss"
import { getStaticPathsBlogSlug, getStaticPropsBlogSlug } from "../../../lib/blog"
import { BlogPostContent } from "../../../app/constants/types/content_models/types"
import PageHead from "../../../app/components/page_head/PageHead"
import Post from "../../../app/components/post/Post"

const getStaticProps = getStaticPropsBlogSlug
const getStaticPaths = getStaticPathsBlogSlug
export { getStaticPaths, getStaticProps }
const DetailPost = ({ data }: { data: { post: SanityDocument } }) => <Post post={data.post} />

export default DetailPost
