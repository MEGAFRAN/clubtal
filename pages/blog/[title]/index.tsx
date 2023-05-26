import DetailPost, { getStaticProps } from "../../[locale]/blog/[title]"
import { getStaticPathsEn } from "../../../lib/getStaticPostDetail"

export default DetailPost
// getStaticPathsEn ---> generate only paths of locale en of the all posts
const getStaticPaths = getStaticPathsEn
export { getStaticProps, getStaticPaths }
