import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import Header from "../../app/components/sections/above_fold/header/Header"
import SectionDottedCard from "../../app/components/sections/dotted_card/SectionDottedCard"
import SectionHamburger from "../../app/components/sections/hamburger/SectionHamburger"
import SectionInnerRounded from "../../app/components/sections/inner_rounded/SectionInnerRounded"
import HOME_HEAD from "../../app/constants/seo/homeHead"
import SectionAnalytics from "../../app/components/sections/analytics/SectionAnalytics"
import ChatBotToggle from "../../app/components/chatbot_toogle/ChatBotToogle"
import SectionContact from "../../app/components/sections/contact/SectionContact"
import SectionUnderlineList from "../../app/components/sections/underline_list/SectionUnderlineList"
import languageContext from "../../app/contexts/languageContext/languageContext"
import { HomePageProps } from "../../app/constants/types/components_props/types"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

interface HomeProps {
  translation: HomePageProps
}

const Home: NextPage<HomeProps> = () => {
  const [userLanguage, setUserLanguage] = useState<"english" | "español">("english")

  const { t } = useTranslation(["homePage"])
  const TEXT_TRANSLATIONS: HomePageProps = {
    headerTitle: t("headerTitle", { returnObjects: true }),
    headerText: t("headerText", { returnObjects: true }),
    headerButtons: t("headerButtons", { returnObjects: true }),
    sectionInnerRounded: t("sectionInnerRounded", { returnObjects: true }),
    sectionUnderLineList: t("sectionUnderLineList", { returnObjects: true }),
    sectionDottedCard: t("sectionDottedCard", { returnObjects: true }),
    sectionHamburger: t("sectionHamburger", { returnObjects: true }),
    form: t("form", { returnObjects: true }),
    chatbot: t("chatbot", { returnObjects: true }),
    sectionContact: t("sectionContact", { returnObjects: true }),
  }

  return (
    <languageContext.Provider value={{ userLanguage, setUserLanguage }}>
      <Head>{HOME_HEAD}</Head>

      <Header
        title={TEXT_TRANSLATIONS.headerTitle}
        text={TEXT_TRANSLATIONS.headerText}
        buttonText={TEXT_TRANSLATIONS.headerButtons}
        sectionToScroll={TEXT_TRANSLATIONS.sectionContact}
      />
      <SectionInnerRounded
        listData={TEXT_TRANSLATIONS.sectionInnerRounded.listData}
        title={TEXT_TRANSLATIONS.sectionInnerRounded.title}
        buttonText={TEXT_TRANSLATIONS.sectionInnerRounded.buttonText}
        sectionToScroll={TEXT_TRANSLATIONS.sectionContact}
      />
      <SectionUnderlineList
        listData={TEXT_TRANSLATIONS.sectionUnderLineList.listData}
        title={TEXT_TRANSLATIONS.sectionUnderLineList.title}
        buttonText={TEXT_TRANSLATIONS.sectionUnderLineList.buttonText}
        sectionToScroll={TEXT_TRANSLATIONS.sectionContact}
      />
      <SectionDottedCard
        listData={TEXT_TRANSLATIONS.sectionDottedCard.listData}
        title={TEXT_TRANSLATIONS.sectionDottedCard.title}
        buttonText={TEXT_TRANSLATIONS.sectionDottedCard.buttonText}
        sectionToScroll={TEXT_TRANSLATIONS.sectionContact}
      />
      <SectionHamburger
        listData={TEXT_TRANSLATIONS.sectionHamburger.listData}
        title={TEXT_TRANSLATIONS.sectionHamburger.title}
        buttonText={TEXT_TRANSLATIONS.sectionHamburger.buttonText}
        sectionToScroll={TEXT_TRANSLATIONS.sectionContact}
      />
      <SectionContact title={TEXT_TRANSLATIONS.form.title} />
      <ChatBotToggle />
      <SectionAnalytics />
    </languageContext.Provider>
  )
}

export default Home

const getStaticProps = makeStaticProps(["common", "homePage", "components/text"])
export { getStaticPaths, getStaticProps }
