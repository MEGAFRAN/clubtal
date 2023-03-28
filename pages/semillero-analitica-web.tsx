import { useRouter } from "next/router"
import { LandingPage } from "../app/components/templates/layout/LandingPage"
import { EMAIL_SERVICE_RECRUIT } from "../app/services/api/variables"
import { HOME_TEXT } from "../app/services/pages/home-text"
import { landingPage } from "../app/services/pages/landing_pages/semillero-analitica-web"

const SemilleroAnaliticaWeb = () => {
  const router = useRouter()
  const { pathname } = router
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts, formText } = currentLanguage
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
      endpoint={EMAIL_SERVICE_RECRUIT}
    />
  )
}
export default SemilleroAnaliticaWeb
