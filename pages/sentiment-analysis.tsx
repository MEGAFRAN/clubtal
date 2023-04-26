import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import SENTIMENT_ANALYSIS_HEAD from "../app/constants/seo/sentimentAnalysisHead"
import SENTIMENT_ANALYSIS_TEXT from "../app/services/pages/sentiment-analysis"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"
import languageContext from "../app/contexts/languageContext/languageContext"
import SentimentAnalysisHeader from "../app/components/sections/above_fold/header/SentimentAnalysisHeader"
import SectionFeedback from "../app/components/sections/feedback/SectionFeedback"

const SentimentAnalysis: NextPage = () => {
  const [isSecondaryLanguage, setSecondaryLanguage] = useState<boolean>(false)

  const currentLanguage = isSecondaryLanguage
    ? { ...SENTIMENT_ANALYSIS_TEXT.spanish }
    : { ...SENTIMENT_ANALYSIS_TEXT.english }

  const { ctaText, placeholdersTexts, ctaButtonTexts, feedback } = currentLanguage

  return (
    <languageContext.Provider value={{ isSecondaryLanguage, setSecondaryLanguage }}>
      <Head>{SENTIMENT_ANALYSIS_HEAD}</Head>
      <SentimentAnalysisHeader
        title={ctaText}
        text={placeholdersTexts}
        buttonText={ctaButtonTexts}
      />
      <SectionFeedback formText={feedback} title={feedback[0]} />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default SentimentAnalysis
