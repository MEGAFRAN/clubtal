import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import Header from "../app/components/sections/above_fold/header/Header"
import SectionDottedCard from "../app/components/sections/dotted_card/SectionDottedCard"
import SectionHamburger from "../app/components/sections/hamburger/SectionHamburger"
import SectionInnerRounded from "../app/components/sections/inner_rounded/SectionInnerRounded"
import HOME_HEAD from "../app/constants/seo/homeHead"
import HOME_TEXT from "../app/services/pages/home-text"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"
import ChatBotToggle from "../app/components/chatbot_toogle/ChatBotToogle"
import SectionContact from "../app/components/sections/contact/SectionContact"
import SectionUnderlineList from "../app/components/sections/underline_list/SectionUnderlineList"
import languageContext from "../app/contexts/languageContext/languageContext"

const Home: NextPage = () => {
  const [userLanguage, setUserLanguage] = useState<"english" | "español">("english")

  const appLanguage =
    userLanguage === "español" ? { ...HOME_TEXT.spanish } : { ...HOME_TEXT.english }

  const {
    headerTitle,
    headerText,
    ctaButtonTexts,
    sectionsTitles,
    careers,
    services,
    communityAdvantages,
    followingSteps,
    formText,
    chatbotText,
  } = appLanguage

  return (
    <languageContext.Provider value={{ userLanguage, setUserLanguage }}>
      <Head>{HOME_HEAD}</Head>

      <Header
        title={headerTitle}
        text={headerText}
        buttonText={ctaButtonTexts}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionInnerRounded
        listData={careers}
        title={sectionsTitles[0]}
        buttonText={ctaButtonTexts[5]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionUnderlineList
        listData={services}
        title={sectionsTitles[1]}
        buttonText={ctaButtonTexts[1]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionDottedCard
        listData={communityAdvantages}
        title={sectionsTitles[2]}
        buttonText={ctaButtonTexts[3]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionHamburger
        listData={followingSteps}
        title={sectionsTitles[4]}
        buttonText={ctaButtonTexts[6]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
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

export default Home
