import type { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import SectionAnalytics from "../../app/components/sections/analytics/SectionAnalytics"
import SectionFeedback from "../../app/components/sections/feedback/SectionFeedback"
import SocialSharing from "../../app/components/social_sharing/SocialSharing"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"
import BURNOUT_QUIZ_HEAD from "../../app/constants/seo/burnOutQuizHead"
import QuestionnarieHeader from "../../app/components/sections/above_fold/header/QuestionnarieHeader"
import Questionnaire from "../../app/components/questionnarie/Questionnarie"

const BurnOutQuiz: NextPage = () => {
  const { t } = useTranslation(["pages/burnOutQuiz"])

  return (
    <>
      <Head>{BURNOUT_QUIZ_HEAD}</Head>
      <QuestionnarieHeader title={t("burnOutQuiz") as string}>
        <Questionnaire
          questions={t("burnOutQuestions", { returnObjects: true })}
          ratings={t("burnOutQuizRatings", { returnObjects: true })}
        />
      </QuestionnarieHeader>
      <SectionFeedback title={t("rateApp") as string} />
      <SocialSharing />
      <SectionAnalytics />
    </>
  )
}

export default BurnOutQuiz

const getStaticProps = makeStaticProps(["pages/burnOutQuiz", "components/text"])
export { getStaticPaths, getStaticProps }
