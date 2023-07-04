import React, { useState } from "react"
import { useTranslation } from "next-i18next"
import styles from "../../styles/components/feedback.module.scss"
import sendFeedbackMessage from "../../services/form_services/feedback_form/feedback-form.service"
import {
  handleInput,
  handleValidation,
} from "../../services/utils/general/validation_handlers/validationHandlers"

const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState("")
  const { t } = useTranslation(["components/text"])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    sendFeedbackMessage(feedbackText)
  }

  return (
    <div className={styles.container}>
      <h2>¿Que quieres ver o mejorar en la aplicación?</h2>
      <form onSubmit={handleSubmit} aria-label="Feedback Form">
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            required
            placeholder="Quiero..."
            onInvalid={(event) => handleValidation(event, t("pleaseFillThisField"))}
            onInput={(event) => handleInput(event)}
            onChange={(event) => setFeedbackText(event.target.value)}
            aria-label="Write Message"
          ></textarea>
        </label>
        <button className={styles.send} type="submit">
          Enviar opinion
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
