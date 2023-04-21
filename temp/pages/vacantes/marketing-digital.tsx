import { NextPage } from "next"
import { useRouter } from "next/router"
import JobDetail from "../../../app/components/templates/vacancy/JobDetail"
import HOME_TEXT from "../../../app/services/pages/home-text"
import Vacancy from "../../../app/services/pages/vacancy/marketing-digital"

const MarketingDigital: NextPage = () => {
  const router = useRouter()
  const { pathname } = router
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts, formText } = currentLanguage
  const { marketingDigital } = Vacancy
  return (
    <JobDetail
      options={homeNavbarOptions}
      buttonText={ctaButtonTexts[0]}
      mail={"info@clubtal.com"}
      withLanguageToggle={isHomePage}
      titleJob={marketingDigital.title}
      descriptionJob={marketingDigital.description}
      taskJob={marketingDigital.taskJob}
      requirementsJob={marketingDigital.requirementsJob}
      aboutCompany={marketingDigital.aboutCompany}
      text={formText}
    />
  )
}
export default MarketingDigital
