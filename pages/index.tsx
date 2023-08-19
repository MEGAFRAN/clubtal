import Head from "next/head"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import Header from "../app/components/sections/above_fold/header/Header"
import FeedbackForm from "../app/components/feedback/FeedbackForm"
import { IndexContent } from "../app/constants/types/content_models/types"

const getStaticProps = getStaticPropsIndexContent
export { getStaticProps }
const Home = ({ data }: IndexContent) => (
  <>
    <Head>
      <PageHead
        description={data.metadata.description}
        title={data.metadata.title}
        locale={data.metadata.locale}
        url={data.metadata.url}
      />
    </Head>
    <Header
      title={data.content.header.title}
      text={data.content.header.subTitle}
      buttonText={["jojobon"]}
      callToAction={data.content.header.callToAction}
      sectionToScroll={"#section-underline-list"}
    />
    <FeedbackForm
      title={data.content.form.title}
      placeholder={data.content.form.placeholder}
      callToAction={data.content.form.callToAction}
      invalidMessage={data.content.form.invalidMessage}
    />
  </>
)

export default Home
