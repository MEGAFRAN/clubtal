import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import SENTIMENT_ANALYSIS_HEAD from "../app/constants/seo/sentimentAnalysisHead"
import SENTIMENT_ANALYSIS_TEXT from "../app/services/pages/sentiment-analysis"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"
import SectionContact from "../app/components/sections/contact/SectionContact"
import languageContext from "../app/contexts/languageContext/languageContext"
import SentimentAnalysisHeader from "../app/components/sections/above_fold/header/SentimentAnalysisHeader"

const SentimentAnalysis: NextPage = () => {
  const [isSecondaryLanguage, setSecondaryLanguage] = useState<boolean>(false)

  const currentLanguage = isSecondaryLanguage
    ? { ...SENTIMENT_ANALYSIS_TEXT.spanish }
    : { ...SENTIMENT_ANALYSIS_TEXT.english }

  const { ctaText, placeholdersTexts, ctaButtonTexts, sectionsTitles, formText } = currentLanguage

  return (
    <languageContext.Provider value={{ isSecondaryLanguage, setSecondaryLanguage }}>
      <Head>{SENTIMENT_ANALYSIS_HEAD}</Head>
      <SentimentAnalysisHeader
        title={ctaText}
        text={placeholdersTexts}
        buttonText={ctaButtonTexts}
        sectionToScroll={SENTIMENT_ANALYSIS_TEXT.sectionsIds.contact}
      />
      <SectionContact formText={formText} title={sectionsTitles[5]} />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default SentimentAnalysis
