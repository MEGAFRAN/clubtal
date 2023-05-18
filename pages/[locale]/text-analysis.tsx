import type { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import TEXT_ANALYSIS_HEAD from "../../app/constants/seo/textAnalysisHead"
import SectionAnalytics from "../../app/components/sections/analytics/SectionAnalytics"
import SentimentAnalysisHeader from "../../app/components/sections/above_fold/header/TextAnalysisHeader"
import SectionFeedback from "../../app/components/sections/feedback/SectionFeedback"
import SocialSharing from "../../app/components/social_sharing/SocialSharing"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

const TextAnalysis: NextPage = () => {
  const { t } = useTranslation(["pages/textAnalysis"])

  return (
    <>
      <Head>{TEXT_ANALYSIS_HEAD}</Head>
      <SentimentAnalysisHeader title={t("textAnalysis") as string} />
      <SectionFeedback title={t("rateApp") as string} />
      <SocialSharing />
      <SectionAnalytics />
    </>
  )
}

export default TextAnalysis

// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["pages/textAnalysis", "components/text"]
const getStaticProps = makeStaticProps({ ns })
export { getStaticPaths, getStaticProps }
