import { useRouter } from "next/router"
import { LandingPage } from "../app/components/templates/layout/LandingPage"
import { HOME_TEXT } from "../app/services/pages/home-text"

const SemilleroAnaliticaWeb = () => {
  const router = useRouter()
  const { pathname } = router
  const isHomePage = pathname === "/" ? true : false
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts, formText, landingPage } = currentLanguage
  const { semilleroAnaliticaWeb } = landingPage
  return (
    <LandingPage
      options={homeNavbarOptions}
      buttonText={ctaButtonTexts[0]}
      mail={"info@clubtal.com"}
      withLanguageToggle={isHomePage}
      headingType="h1"
      title={semilleroAnaliticaWeb.title}
      textInformation={semilleroAnaliticaWeb.text}
      text={formText}
    />
  )
}
export default SemilleroAnaliticaWeb
