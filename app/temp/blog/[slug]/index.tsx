import { SanityDocument } from "@sanity/client"
import styles from "../../../styles/layouts/postDetail.module.scss"
import { getStaticPathsBlogSlug, getStaticPropsBlogSlug } from "../../../../lib/blog"
import { BlogPostContent } from "../../../constants/types/content_models/types"
import PageHead from "../../../components/page_head/PageHead"
import Post from "../../../components/post/Post"

const getStaticProps = getStaticPropsBlogSlug
const getStaticPaths = getStaticPathsBlogSlug
export { getStaticPaths, getStaticProps }
const DetailPost = ({ data }: { data: { post: SanityDocument } }) => <Post post={data.post} />

export default DetailPost
