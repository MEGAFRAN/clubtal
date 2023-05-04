import path from "path"
import fs from "fs/promises"
import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import Header from "../app/components/sections/above_fold/header/Header"
import SectionDottedCard from "../app/components/sections/dotted_card/SectionDottedCard"
import SectionHamburger from "../app/components/sections/hamburger/SectionHamburger"
import SectionInnerRounded from "../app/components/sections/inner_rounded/SectionInnerRounded"
import HOME_HEAD from "../app/constants/seo/homeHead"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"
import ChatBotToggle from "../app/components/chatbot_toogle/ChatBotToogle"
import SectionContact from "../app/components/sections/contact/SectionContact"
import SectionUnderlineList from "../app/components/sections/underline_list/SectionUnderlineList"
import languageContext from "../app/contexts/languageContext/languageContext"
import { HomePageProps } from "../app/constants/types/components_props/types"




interface HomeProps {
  translation: HomePageProps
}
  

export const getStaticProps:GetStaticProps<HomeProps> = async ({ locale }) => {
  const ENDPOINT_FILE_TRANSLATION = `/public/locales/${locale}/homePage.json`
  const fileDirectory = path.join(process.cwd(), ENDPOINT_FILE_TRANSLATION)
  const filePromise = await fs.readFile(fileDirectory,"utf-8")
  const fileRead = JSON.parse(filePromise)
  const translation = await Promise.resolve(fileRead) 
  return {
    props: {
      translation,
    }
  }
}
const Home: NextPage<HomeProps> = ({ translation }) => {
  const [userLanguage, setUserLanguage] = useState<"english" | "español">("english")

  const {
    headerTitle, 
    headerText, 
    headerButtons, 
    sectionInnerRounded, 
    sectionUnderLineList, 
    sectionDottedCard, 
    sectionHamburger, 
    form, 
    chatbot, 
    sectionContact
  } = translation
  return (
    <languageContext.Provider value={{ userLanguage, setUserLanguage }}>
      <Head>{HOME_HEAD}</Head>

      <Header
        title={headerTitle}
        text={headerText}
        buttonText={headerButtons}
        sectionToScroll={sectionContact}
      />
      <SectionInnerRounded
        listData={sectionInnerRounded.listData}
        title={sectionInnerRounded.title}
        buttonText={sectionInnerRounded.buttonText}
        sectionToScroll={sectionContact}
      />
      <SectionUnderlineList
        listData={sectionUnderLineList.listData}
        title={sectionUnderLineList.title}
        buttonText={sectionUnderLineList.buttonText}
        sectionToScroll={sectionContact}
      />
      <SectionDottedCard
        listData={sectionDottedCard.listData}
        title={sectionDottedCard.title}
        buttonText={sectionDottedCard.buttonText}
        sectionToScroll={sectionContact}
      />
      <SectionHamburger
        listData={sectionHamburger.listData}
        title={sectionHamburger.title}
        buttonText={sectionHamburger.buttonText}
        sectionToScroll={sectionContact}
      />
      <SectionContact formText={form.formText} title={form.title} />
      <ChatBotToggle
        initialMessage={chatbot.initialMessage}
        inputPlaceholderText={chatbot.inputPlaceholderText}
        sendButtonText={chatbot.sendButtonText}
      />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default Home
