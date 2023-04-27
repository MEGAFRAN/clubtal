import { useState } from "react"
import { FormProps } from "../../constants/types/components_props/types"
import { SEND_FEEDBACK_EMAIL } from "../../services/api/variables"
import styles from "../../styles/components/feedback.module.scss"
import { handleInput, handleValidation } from "../../services/utils/validationHandlers"
import sendFeedbackMessage from "../../services/form_services/feedback_form/feedback-form.service"

const Feedback = ({ text, endpoint = SEND_FEEDBACK_EMAIL }: FormProps) => {
  const [messageResponse, setMessageResponse] = useState("")
  const [messageResponseStatus, setMessageResponseStatus] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setLoading(true)
    sendFeedbackMessage(
      endpoint,
      formMessage,
      setMessageResponseStatus,
      setMessageResponse,
      setLoading,
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
          {loading ? (
            <div className={styles.loading}>{text[5]}</div>
          ) : (
            <button disabled={loading} type="submit">
              {text[3]}
            </button>
          )}
        </>
      )}
    </form>
  )
}

export default Feedback
