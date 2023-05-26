import { InferGetStaticPropsType } from "next"
import { MDXRemote } from "next-mdx-remote"
import MDXComponents from "../../../../app/components/mdx"
import { getStaticPathsEs, makeStaticProps } from "../../../../lib/getStaticPostDetail"

// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["common"]
const getStaticProps = makeStaticProps({ ns })
// getStaticPathsEs ---> generate only paths of locale es of the all posts
const getStaticPaths = getStaticPathsEs
export { getStaticPaths, getStaticProps }

const DetailPost = ({ source }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div>
    <MDXRemote {...source} components={MDXComponents} />
  </div>
)

export default DetailPost
