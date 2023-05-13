import { useTranslation } from "next-i18next"
import React, { useState, FormEvent } from "react"
import styles from "../../styles/components/questionnarie.module.scss"

type Props = {
  questions: string[]
  ratings: string[]
}

type FormState = {
  [key: string]: string
}

const Questionnaire: React.FC<Props> = ({ questions, ratings }) => {
  const { t } = useTranslation(["components/text"])
  const [formState, setFormState] = useState<FormState>({})
  const [results, setResults] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const progress = (currentQuestionIndex / (questions.length - 1)) * 100

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
    // Advance to the next question after selecting an answer
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setResults(JSON.stringify(formState))
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setResults(JSON.stringify(formState))
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.question}>
          <label className={styles.question_label}>{`${currentQuestionIndex + 1}: ${
            questions[currentQuestionIndex]
          }`}</label>
          <div className={styles.ratings}>
            {ratings.map((rating, j) => (
              <label key={j} className={styles.rating_label}>
                <input
                  type="radio"
                  name={`question${currentQuestionIndex}`}
                  value={rating}
                  checked={formState[`question${currentQuestionIndex}`] === rating}
                  onChange={handleInputChange}
                />
                {rating}
              </label>
            ))}
          </div>
          <div className={styles.progress_bar}>
            <div className={styles.fill} style={{ width: `${progress}%` }} />
          </div>
          <div style={{ color: "white" }}>
            {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>
        {currentQuestionIndex === questions.length - 1 && (
          <button type="submit">{t("analyzeAnswers")}</button>
        )}
      </form>
      {results && <p className="results">{results}</p>}
    </div>
  )
}

export default Questionnaire
