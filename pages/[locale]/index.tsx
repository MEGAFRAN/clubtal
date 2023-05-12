import type { NextPage } from "next"
import Head from "next/head"
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
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

const Home: NextPage = () => {
  const { t } = useTranslation(["pages/index"])

  return (
    <>
      <Head>{HOME_HEAD}</Head>

      <Header
        title={t("headerTitle", { returnObjects: true })}
        text={t("headerText", { returnObjects: true })}
        buttonText={t("headerButtons", { returnObjects: true })}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionInnerRounded
        listData={t("listData", { returnObjects: true })}
        title={t("whatDoWeDo")}
        buttonText={t("iWantMySolution")}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionUnderlineList
        listData={t("listData2", { returnObjects: true })}
        title={t("benefitsForYourBusiness")}
        buttonText={t("requestService")}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionDottedCard
        listData={t("listData3", { returnObjects: true })}
        title={t("whatDoWeDo")}
        buttonText={t("requestService")}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionHamburger
        listData={t("listData4", { returnObjects: true })}
        title={t("stepsToFollow")}
        buttonText={t("requestService")}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionContact title={t("contactUs")} />
      <ChatBotToggle />
      <SectionAnalytics />
    </>
  )
}

export default Home

const getStaticProps = makeStaticProps(["common", "components/text", "pages/index"])
export { getStaticPaths, getStaticProps }
