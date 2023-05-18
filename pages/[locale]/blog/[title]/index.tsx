import type { NextPage } from "next"
import { getStaticPaths, makeStaticProps } from "../../../../lib/getStaticPostDetail"

const DetailPost: NextPage = () => (
  <div>
    <h1>PostDetail</h1>
  </div>
)

export default DetailPost

const getStaticProps = makeStaticProps({ ns: ["common"] })
export { getStaticPaths, getStaticProps }
