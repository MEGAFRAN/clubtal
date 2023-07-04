import type { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import PageHead from "../../app/components/page_head/PageHead"
import Header from "../../app/components/sections/above_fold/header/Header"
import SectionDottedCard from "../../app/components/sections/dotted_card/SectionDottedCard"
import SectionUnderlineList from "../../app/components/sections/underline_list/SectionUnderlineList"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"
import FeedbackForm from "../../app/components/feedback/FeedbackForm"
import Footer from "../../app/components/footer/Footer"

const Home: NextPage = () => {
  const { t } = useTranslation(["pages/index"])

  return (
    <>
      <Head>
        <PageHead
          description={t("metatagDescription")}
          title={t("metatagTitle")}
          locale={t("metatagLocale")}
          url={t("metatagUrl")}
        />
      </Head>
      <Header
        title={t("headerTitle", { returnObjects: true })}
        text={t("headerText", { returnObjects: true })}
        buttonText={t("headerButtons", { returnObjects: true })}
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
      <FeedbackForm />
      <Footer />
    </>
  )
}

export default Home
// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["common", "components/text", "pages/index"]
const getStaticProps = makeStaticProps({ ns })
export { getStaticPaths, getStaticProps }
