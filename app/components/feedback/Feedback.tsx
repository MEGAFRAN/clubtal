import { useState } from "react"
import { FormProps } from "../../constants/types/components_props/types"
import { SEND_FEEDBACK_EMAIL } from "../../services/api/variables"
import styles from "../../styles/components/feedback.module.scss"
import {
  handleInput,
  handleValidation,
} from "../../services/utils/general/validation_handlers/validationHandlers"
import sendFeedbackMessage from "../../services/form_services/feedback_form/feedback-form.service"
import Loading from "../loading/Loading"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"

const Feedback = ({ text, endpoint = SEND_FEEDBACK_EMAIL }: FormProps) => {
  const [messageResponse, setMessageResponse] = useState("")
  const [messageResponseStatus, setMessageResponseStatus] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    gtmEvents.sendFeedbackTextAnalysis({ formMessage })
    setIsLoading(true)
    sendFeedbackMessage(
      endpoint,
      formMessage,
      setMessageResponseStatus,
      setMessageResponse,
      setIsLoading,
    )
  }

  return (
    <form className={styles.container} onSubmit={onSubmit} aria-label="Feedback Form">
      {text && (
        <>
          <h2>{text[1]}</h2>
          <label htmlFor="message">
            <input
              name="message"
              id="message"
              required
              placeholder={text[2]}
              onInvalid={(event) => handleValidation(event, text[4])}
              onInput={(event) => handleInput(event)}
              onChange={(event) => setFormMessage(event.target.value)}
              aria-label="Write Message"
            ></input>
          </label>
          <div aria-live="polite" aria-atomic="true">
            <p className={`response-mensaje--${messageResponseStatus}`}>{messageResponse}</p>
          </div>
          <Loading
            isLoading={isLoading}
            buttonText={text[3]}
            loadingText={text[5]}
            maxProgress={150}
          />
        </>
      )}
    </form>
  )
}

export default Feedback
