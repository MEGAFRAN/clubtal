import { useTranslation } from "next-i18next"
import React, { useState, FormEvent, KeyboardEvent } from "react"
import styles from "../../styles/components/questionnarie.module.scss"
import {
  QuestionnarieFormState,
  QuestionnarieProps,
} from "../../constants/types/components_props/types"
import SectionFeedback from "../sections/feedback/SectionFeedback"
import SocialSharing from "../social_sharing/SocialSharing"

const Questionnaire = ({ questions, options, quizLogic }: QuestionnarieProps) => {
  const { t } = useTranslation(["components/text"])
  const [formState, setFormState] = useState<QuestionnarieFormState>({})
  const [results, setResults] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const numberOfQuestions = questions.length - 1
  const barProgress = (currentQuestionIndex / numberOfQuestions) * 100
  const quizProgress = `${currentQuestionIndex + 1}/${questions.length}`
  const currentQuestion = `question${currentQuestionIndex}`

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setResults(quizLogic(formState))
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < numberOfQuestions) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      setResults(quizLogic(formState))
    }
  }

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!event.target || (event.target as HTMLElement).tagName !== "INPUT") return

    switch (event.key) {
      case "ArrowRight":
        nextQuestion()
        break
      case "ArrowLeft":
        prevQuestion()
        break
      default:
        break
    }
  }

  const isCurrentQuestionAnswered = typeof formState[currentQuestion] === "string"

  return (
    <div className={styles.container}>
      {results ? (
        <div className={styles.results_container}>
          <div dangerouslySetInnerHTML={{ __html: results }} />
          <SectionFeedback title={t("rate") as string} />
          <SocialSharing />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.question}>
            <legend id="question-label" className={styles.question_label}>{`${
              currentQuestionIndex + 1
            }: ${questions[currentQuestionIndex]}`}</legend>
            <div role="group" aria-labelledby="question-label" className={styles.options}>
              {options.map((option) => (
                <label
                  key={option}
                  className={
                    formState[currentQuestion] === option
                      ? `${styles.option_label} ${styles.option_label_checked}`
                      : styles.option_label
                  }
                >
                  <input
                    type="radio"
                    name={currentQuestion}
                    value={option}
                    checked={formState[currentQuestion] === option}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className={styles.button_container}>
              {currentQuestionIndex !== 0 && (
                <button className={styles.prev} type="button" onClick={prevQuestion}>
                  {t("previous")}
                </button>
              )}
              {currentQuestionIndex !== numberOfQuestions ? (
                <button
                  className={styles.next}
                  type="button"
                  onClick={nextQuestion}
                  disabled={!isCurrentQuestionAnswered}
                >
                  {t("next")}
                </button>
              ) : (
                <button type="submit" disabled={!isCurrentQuestionAnswered}>
                  {t("analyzeAnswers")}
                </button>
              )}
            </div>
            <div className={styles.progress_bar}>
              <div
                className={styles.fill}
                style={{ width: `${barProgress}%` }}
                aria-valuenow={barProgress}
                aria-valuemin={1}
                aria-valuemax={questions.length}
                role="progressbar"
              />
            </div>
            <div style={{ color: "white" }} aria-live="polite">
              {quizProgress}
            </div>
          </fieldset>
        </form>
      )}
    </div>
  )
}

export default Questionnaire
