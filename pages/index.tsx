import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { Header } from "../app/components/sections/above_fold/header/Header"
import { SectionDottedCard } from "../app/components/sections/dotted_card/SectionDottedCard"
import { SectionContact } from "../app/components/sections/contact/SectionContact"
import { SectionHamburger } from "../app/components/sections/hamburger/SectionHamburger"
import { SectionInnerRounded } from "../app/components/sections/inner_rounded/SectionInnerRounded"
import { SectionSimpleSpace } from "../app/components/sections/simple_space/SectionSimpleSpace"
import { SectionUnderlineList } from "../app/components/sections/underline_list/SectionUnderlineList"
import { HOME_HEAD } from "../app/constants/seo/homeHead"
import {
  indexTextSpanish,
  indexTextEnglish,
} from "../app/services/pages/index/texts"
import { SectionAnalytics } from "../app/components/sections/analytics/SectionAnalytics"

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
    careers,
    desires,
    communityAdvantages,
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
      <SectionUnderlineList
        listData={careers}
        title={sectionsTitles[0]}
        subTitle={sectionsSubTitles[0]}
        buttonText={ctaButtonTexts[1]}
      />
      <SectionInnerRounded
        listData={desires}
        title={sectionsTitles[1]}
        buttonText={ctaButtonTexts[4]}
      />
      <SectionDottedCard
        listData={communityAdvantages}
        title={sectionsTitles[2]}
        buttonText={ctaButtonTexts[3]}
      />
      <SectionSimpleSpace
        listData={projectTools}
        title={sectionsTitles[3]}
        buttonText={ctaButtonTexts[5]}
      />
      <SectionHamburger
        listData={followingSteps}
        title={sectionsTitles[4]}
        buttonText={ctaButtonTexts[6]}
      />
      <SectionContact formText={formText} title={sectionsTitles[5]} />
      <SectionAnalytics />
    </>
  )
}

export default Home
