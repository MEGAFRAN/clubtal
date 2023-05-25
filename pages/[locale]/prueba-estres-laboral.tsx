import type { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import SectionAnalytics from "../../app/components/sections/analytics/SectionAnalytics"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"
import BURNOUT_QUIZ_HEAD from "../../app/constants/seo/burnOutQuizHead"
import QuestionnarieHeader from "../../app/components/sections/above_fold/header/QuestionnarieHeader"
import Questionnaire from "../../app/components/questionnarie/Questionnarie"
import calculateBurnoutResult from "../../app/services/utils/quiz/burnout-quiz"
import SectionQuizContent from "../../app/components/sections/quiz_content/QuizContent"

const BurnOutQuiz: NextPage = () => {
  const { t } = useTranslation(["pages/burnOutQuiz"])

  return (
    <>
      <Head>{BURNOUT_QUIZ_HEAD}</Head>
      <QuestionnarieHeader title={t("burnOutQuiz") as string}>
        <Questionnaire
          quizLogic={calculateBurnoutResult}
          questions={t("burnOutQuestions", { returnObjects: true })}
          options={t("burnOutQuizOptions", { returnObjects: true })}
        />
      </QuestionnarieHeader>
      <SectionQuizContent
        titles={t("contentTitles", { returnObjects: true })}
        paragraphs={t("contentParagraphs", { returnObjects: true })}
      />
      <SectionAnalytics />
    </>
  )
}

export default BurnOutQuiz
// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["pages/burnOutQuiz", "components/text"]
const getStaticProps = makeStaticProps({ ns })
export { getStaticPaths, getStaticProps }
