import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import Header from "../app/components/sections/above_fold/header/Header"
import FeedbackForm from "../app/components/feedback/FeedbackForm"
import { IndexContent } from "../app/constants/types/content_models/types"

const getStaticProps = getStaticPropsIndexContent
export { getStaticProps }
const Home = ({ data }: IndexContent) => {
  const { metadata, content } = data

  return (
    <>
      <PageHead
        description={metadata.description}
        title={metadata.title}
        locale={metadata.locale}
        url={metadata.url}
      />
      <Header
        title={content.header.title}
        text={content.header.subTitle}
        buttonText={["jojobon"]}
        callToAction={content.header.callToAction}
        sectionToScroll={"#section-underline-list"}
      />
      <FeedbackForm
        title={content.form.title}
        placeholder={content.form.placeholder}
        callToAction={content.form.callToAction}
        invalidMessage={content.form.invalidMessage}
      />
    </>
  )
}

export default Home
