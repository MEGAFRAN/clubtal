import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import SENTIMENT_ANALYSIS_HEAD from "../app/constants/seo/sentimentAnalysisHead"
import SENTIMENT_ANALYSIS_TEXT from "../app/services/pages/sentiment-analysis"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"
import languageContext from "../app/contexts/languageContext/languageContext"
import SentimentAnalysisHeader from "../app/components/sections/above_fold/header/SentimentAnalysisHeader"
import SectionFeedback from "../app/components/sections/feedback/SectionFeedback"
import SectionContentPage from "../app/components/sections/content_page/SectionContentPage"
import SocialSharing from "../app/components/social_sharing/SocialSharing"
import getUserLanguage from "../app/services/utils/languageValidator"

const SentimentAnalysis: NextPage = () => {
  const [userLanguage, setUserLanguage] = useState<"english" | "español">("english")

  useEffect(() => {
    setUserLanguage(getUserLanguage())
  }, [])

  const appLanguage =
    userLanguage === "español"
      ? { ...SENTIMENT_ANALYSIS_TEXT.spanish }
      : { ...SENTIMENT_ANALYSIS_TEXT.english }

  const { ctaText, placeholdersTexts, ctaButtonTexts, feedback, content } = appLanguage

  return (
    <languageContext.Provider value={{ userLanguage, setUserLanguage }}>
      <Head>{SENTIMENT_ANALYSIS_HEAD}</Head>
      <SentimentAnalysisHeader
        title={ctaText}
        text={placeholdersTexts}
        buttonText={ctaButtonTexts}
      />
      <SocialSharing userLanguage={userLanguage} />
      <SectionFeedback formText={feedback} title={feedback[0]} />
      <SectionContentPage content={content} />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default SentimentAnalysis
