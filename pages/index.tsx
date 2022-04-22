import type { NextPage } from 'next'
import { useState } from 'react'
import { Header } from '../app/components/sections/above_fold/header/Header'
import { Advantages } from '../app/components/sections/advantages/Advantages'
import { FollowingSteps } from '../app/components/sections/following_steps/FollowingSteps'
import { Services } from '../app/components/sections/services/Services'
import { SupportedBy } from '../app/components/sections/supported_by/SupportedBy'
import { UseCases } from '../app/components/sections/use_cases/UseCase'
import { indexTextSpanish, indexTextEnglish } from '../app/services/pages/index/texts'


const Home: NextPage = () => {

  const [isEnglishText, setIsEnglishText] = useState<boolean>(false)
  
  const currentLanguage = isEnglishText ? { ...indexTextEnglish } : { ...indexTextSpanish }

  const { homeNavbarOptions, headerTitle, headerText, ctaButtonTexts, sectionsTitles, tokensUseCases, services,
          blockchainAdvantages, solanaStats, followingSteps } = currentLanguage

  return (

    <>
      <Header navbarOptions={homeNavbarOptions} setIsEnglishText={setIsEnglishText} title={headerTitle}
        text={headerText} buttonText={ctaButtonTexts}/>
      <UseCases listData={tokensUseCases} title={sectionsTitles[0]} buttonText={ctaButtonTexts[1]}/>
      <Services listData={services} title={sectionsTitles[1]} buttonText={ctaButtonTexts[2]}/>
      <Advantages listData={blockchainAdvantages} title={sectionsTitles[2]} buttonText={ctaButtonTexts[3]}/>
      <SupportedBy listData={solanaStats} title={sectionsTitles[3]} buttonText={ctaButtonTexts[0]}/>
      <FollowingSteps listData={followingSteps} title={sectionsTitles[4]} buttonText={ctaButtonTexts[2]}/>
    </>
  )
}

export default Home
