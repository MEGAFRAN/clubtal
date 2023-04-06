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
  const [isSecondaryLanguage, setSecondaryLanguage] = useState<boolean>(false)

  const currentLanguage = isSecondaryLanguage
    ? { ...HOME_TEXT.englishText }
    : { ...HOME_TEXT.spanishText }

  const {
    homeNavbarOptions,
    headerTitle,
    headerText,
    ctaButtonTexts,
    sectionsTitles,
    sectionsSubTitles,
    careers,
    services,
    communityAdvantages,
    followingSteps,
    formText,
  } = currentLanguage

  return (
    <languageContext.Provider value={{ isSecondaryLanguage, setSecondaryLanguage }}>
      <Head>{HOME_HEAD}</Head>

      <Header
        navbarOptions={homeNavbarOptions}
        title={headerTitle}
        text={headerText}
        buttonText={ctaButtonTexts}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionInnerRounded
        listData={careers}
        title={sectionsTitles[0]}
        buttonText={ctaButtonTexts[5]}
        linkTo={"/login"}
      />
      <SectionUnderlineList
        listData={services}
        title={sectionsTitles[1]}
        subTitle={sectionsSubTitles[0]}
        buttonText={ctaButtonTexts[1]}
        linkTo={"/login"}
      />
      <SectionDottedCard
        listData={communityAdvantages}
        title={sectionsTitles[2]}
        buttonText={ctaButtonTexts[3]}
        linkTo={"/login"}
      />
      <SectionHamburger
        listData={followingSteps}
        title={sectionsTitles[4]}
        buttonText={ctaButtonTexts[6]}
        linkTo={"/login"}
      />
      <SectionContact formText={formText} title={sectionsTitles[5]} />
      <ChatBotToggle />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default Home
