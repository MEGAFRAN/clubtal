import { useTranslation } from "next-i18next"
import React, { useState, FormEvent } from "react"
import styles from "../../styles/components/questionnarie.module.scss"
import {
  QuestionnarieFormState,
  QuestionnarieProps,
} from "../../constants/types/components_props/types"

const Questionnaire = ({ questions, options, quizLogic }: QuestionnarieProps) => {
  const { t } = useTranslation(["components/text"])
  const [formState, setFormState] = useState<QuestionnarieFormState>({})
  const [results, setResults] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const progress = (currentQuestionIndex / (questions.length - 1)) * 100

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prevFormState) => ({ ...prevFormState, [name]: parseInt(value, 10) }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setResults(quizLogic(formState))
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }
  }

  const isCurrentQuestionAnswered = typeof formState[`question${currentQuestionIndex}`] === "number"

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.question}>
          <label aria-label="Question" className={styles.question_label}>{`${
            currentQuestionIndex + 1
          }: ${questions[currentQuestionIndex]}`}</label>
          <div className={styles.options}>
            {options.map((option, j) => (
              <label key={j} aria-label={`Option ${j}`} className={styles.option_label}>
                <input
                  type="radio"
                  name={`question${currentQuestionIndex}`}
                  value={j}
                  checked={formState[`question${currentQuestionIndex}`] === j}
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
            <div className={styles.fill} style={{ width: `${progress}%` }} />
          </div>
          <div style={{ color: "white" }}>
            {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>
      </form>
      {results && <div dangerouslySetInnerHTML={{ __html: results }} />}
    </div>
  )
}

export default Questionnaire
