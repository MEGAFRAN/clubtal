import { useTranslation } from "next-i18next"
import React, { useState, FormEvent, useEffect } from "react"
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
  const progress = (currentQuestionIndex / (questions.length - 1)) * 100

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setResults(quizLogic(formState))
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target && (event.target as HTMLElement).tagName === "INPUT") {
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
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentQuestionIndex])

  const isCurrentQuestionAnswered = typeof formState[`question${currentQuestionIndex}`] === "string"

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
              {options.map((option, j) => (
                <label
                  key={j}
                  className={
                    formState[`question${currentQuestionIndex}`] === option
                      ? `${styles.option_label} ${styles.option_label_checked}`
                      : styles.option_label
                  }
                >
                  <input
                    type="radio"
                    name={`question${currentQuestionIndex}`}
                    value={option}
                    checked={formState[`question${currentQuestionIndex}`] === option}
                    onChange={handleInputChange}
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
              {currentQuestionIndex !== questions.length - 1 ? (
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
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin={1}
                aria-valuemax={questions.length}
                role="progressbar"
              />
            </div>
            <div style={{ color: "white" }} aria-live="polite">
              {currentQuestionIndex + 1}/{questions.length}
            </div>
          </fieldset>
        </form>
      )}
    </div>
  )
}

export default Questionnaire
