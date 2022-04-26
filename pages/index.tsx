import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Header } from '../app/components/sections/above_fold/header/Header'
import { Advantages } from '../app/components/sections/advantages/Advantages'
import { Contact } from '../app/components/sections/contact/Contact'
import { FollowingSteps } from '../app/components/sections/following_steps/FollowingSteps'
import { Services } from '../app/components/sections/services/Services'
import { SupportedBy } from '../app/components/sections/supported_by/SupportedBy'
import { UseCases } from '../app/components/sections/use_cases/UseCase'
import { HOME_HEAD } from '../app/constants/seo/homeHead'
import { indexTextSpanish, indexTextEnglish } from '../app/services/pages/index/texts'


const Home: NextPage = () => {

  const [isEnglishText, setIsEnglishText] = useState<boolean>(true)
  
  const currentLanguage = isEnglishText ? { ...indexTextEnglish } : { ...indexTextSpanish }

  const { homeNavbarOptions, headerTitle, headerText, ctaButtonTexts, sectionsTitles, tokensUseCases, services,
          blockchainAdvantages, solanaStats, followingSteps, formText } = currentLanguage

  return (

    <>
      <Head>{HOME_HEAD}</Head>
      
      <Header navbarOptions={homeNavbarOptions} setIsEnglishText={setIsEnglishText} title={headerTitle}
        text={headerText} buttonText={ctaButtonTexts}/>
      <UseCases listData={tokensUseCases} title={sectionsTitles[0]} buttonText={ctaButtonTexts[1]}/>
      <Services listData={services} title={sectionsTitles[1]} buttonText={ctaButtonTexts[4]}/>
      <Advantages listData={blockchainAdvantages} title={sectionsTitles[2]} buttonText={ctaButtonTexts[3]}/>
      <SupportedBy listData={solanaStats} title={sectionsTitles[3]} buttonText={ctaButtonTexts[0]}/>
      <FollowingSteps listData={followingSteps} title={sectionsTitles[4]} buttonText={ctaButtonTexts[2]} />
      <Contact formText={formText}/>
    </>
  )
}

export default Home
