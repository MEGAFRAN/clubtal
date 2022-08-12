import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { Header } from "../app/components/sections/above_fold/header/Header"
import { Advantages } from "../app/components/sections/advantages/Advantages"
import { Contact } from "../app/components/sections/contact/Contact"
import { FollowingSteps } from "../app/components/sections/following_steps/FollowingSteps"
import { Services } from "../app/components/sections/services/Services"
import { SupportedBy } from "../app/components/sections/supported_by/SupportedBy"
import { UseCases } from "../app/components/sections/use_cases/UseCase"
import {
  GTM_MAIN_SCRIPT,
  GTM_NO_SCRIPT,
} from "../app/constants/analytics/google_tag_manager/gtmScripts"
import { HOME_HEAD } from "../app/constants/seo/homeHead"
import {
  indexTextSpanish,
  indexTextEnglish,
} from "../app/services/pages/index/texts"

const Home: NextPage = () => {
  const [isSecondaryLanguage, setSecondaryLanguage] = useState<boolean>(false)

  const currentLanguage = isSecondaryLanguage
    ? { ...indexTextEnglish }
    : { ...indexTextSpanish }

  const {
    homeNavbarOptions,
    headerTitle,
    headerText,
    ctaButtonTexts,
    sectionsTitles,
    sectionsSubTitles,
    useCases,
    services,
    blockchainAdvantages,
    projectTools,
    followingSteps,
    formText,
  } = currentLanguage

  return (
    <>
      <Head>{HOME_HEAD}</Head>

      <Header
        navbarOptions={homeNavbarOptions}
        setSecondaryLanguage={setSecondaryLanguage}
        title={headerTitle}
        text={headerText}
        buttonText={ctaButtonTexts}
      />
      <UseCases
        listData={useCases}
        title={sectionsTitles[0]}
        subTitle={sectionsSubTitles[0]}
        buttonText={ctaButtonTexts[1]}
      />
      <Services
        listData={services}
        title={sectionsTitles[1]}
        buttonText={ctaButtonTexts[4]}
      />
      <Advantages
        listData={blockchainAdvantages}
        title={sectionsTitles[2]}
        buttonText={ctaButtonTexts[3]}
      />
      <SupportedBy
        listData={projectTools}
        title={sectionsTitles[3]}
        buttonText={ctaButtonTexts[5]}
      />
      <FollowingSteps
        listData={followingSteps}
        title={sectionsTitles[4]}
        buttonText={ctaButtonTexts[6]}
      />
      <Contact formText={formText} title={sectionsTitles[5]} />
      {GTM_MAIN_SCRIPT}
      {GTM_NO_SCRIPT}
    </>
  )
}

export default Home
