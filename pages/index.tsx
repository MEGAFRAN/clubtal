import type { NextPage } from "next"
import Head from "next/head"
import PageHead from "../app/components/page_head/PageHead"
import Header from "../app/components/sections/above_fold/header/Header"
import FeedbackForm from "../app/components/feedback/FeedbackForm"
import Footer from "../app/components/footer/Footer"

const Home: NextPage = () => (
  <>
    <Head>
      <PageHead
        description={"metatagDescription"}
        title={"metatagTitle"}
        locale={"metatagLocale"}
        url={"metatagUrl"}
      />
    </Head>
    <Header
      title={["Consigue trabajo en tecnología"]}
      text={["Herramientas que facilitan", "conseguir trabajo en tecnología"]}
      buttonText={["jojobon"]}
      sectionToScroll={"#section-underline-list"}
    />
    <FeedbackForm />
    <Footer />
  </>
)

export default Home
