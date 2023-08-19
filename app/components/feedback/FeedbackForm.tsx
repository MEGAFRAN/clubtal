import React, { useState } from "react"
import styles from "../../styles/components/feedback.module.scss"
import sendFeedbackMessage from "../../services/form_services/feedback_form/feedback-form.service"
import {
  handleInput,
  handleValidation,
} from "../../services/utils/general/validation_handlers/validationHandlers"
import { FormProps } from "../../constants/types/components_props/types"

const FeedbackForm = ({ title, placeholder, invalidMessage, callToAction }: FormProps) => {
  const [feedbackText, setFeedbackText] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    sendFeedbackMessage(feedbackText)
  }

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit} aria-label="Feedback Form">
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            required
            placeholder={placeholder}
            onInvalid={(event) => handleValidation(event, invalidMessage)}
            onInput={(event) => handleInput(event)}
            onChange={(event) => setFeedbackText(event.target.value)}
            aria-label="Write Message"
          ></textarea>
        </label>
        <button className={styles.send} type="submit">
          {callToAction}
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
