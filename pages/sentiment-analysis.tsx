import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import SENTIMENT_ANALYSIS_HEAD from "../app/constants/seo/sentimentAnalysisHead"
import SENTIMENT_ANALYSIS_TEXT from "../app/services/pages/sentiment-analysis"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"
import ChatBotToggle from "../app/components/chatbot_toogle/ChatBotToogle"
import SectionContact from "../app/components/sections/contact/SectionContact"
import languageContext from "../app/contexts/languageContext/languageContext"
import SentimentAnalysisHeader from "../app/components/sections/above_fold/header/SentimentAnalysisHeader"

const SentimentAnalysis: NextPage = () => {
  const [isSecondaryLanguage, setSecondaryLanguage] = useState<boolean>(false)

  const currentLanguage = isSecondaryLanguage
    ? { ...SENTIMENT_ANALYSIS_TEXT.english }
    : { ...SENTIMENT_ANALYSIS_TEXT.spanish }

  const { ctaText, placeholdersTexts, ctaButtonTexts, sectionsTitles, formText, chatbotText } =
    currentLanguage

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
      <ChatBotToggle
        initialMessage={chatbotText.initialMessage}
        inputPlaceholderText={chatbotText.inputPlaceholderText}
        sendButtonText={chatbotText.sendButtonText}
      />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default SentimentAnalysis
