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
import { HOME_TEXT } from "../app/services/pages/home-text"
import { SectionAnalytics } from "../app/components/sections/analytics/SectionAnalytics"

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
    projectTools,
    followingSteps,
    formText,
  } = currentLanguage
  const handleSetSecondaryLanguage = (value: boolean) => {
    value ? setSecondaryLanguage(true) : setSecondaryLanguage(false)
  }
  return (
    <>
      <Head>{HOME_HEAD}</Head>

      <Header
        navbarOptions={homeNavbarOptions}
        setSecondaryLanguage={handleSetSecondaryLanguage}
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
        subTitle={sectionsSubTitles[0]}
        buttonText={ctaButtonTexts[1]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionDottedCard
        listData={communityAdvantages}
        title={sectionsTitles[2]}
        buttonText={ctaButtonTexts[3]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionSimpleSpace
        listData={projectTools}
        title={sectionsTitles[3]}
        buttonText={ctaButtonTexts[4]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionHamburger
        listData={followingSteps}
        title={sectionsTitles[4]}
        buttonText={ctaButtonTexts[6]}
        sectionToScroll={HOME_TEXT.sectionsIds.contact}
      />
      <SectionContact formText={formText} title={sectionsTitles[5]} />
      <SectionAnalytics />
    </>
  )
}

export default Home
