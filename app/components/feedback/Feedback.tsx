import React, { useRef, useState } from "react"
import { useTranslation } from "next-i18next"
import styles from "../../styles/components/feedback.module.scss"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"
import sendFeedbackMessage from "../../services/form_services/feedback_form/feedback-form.service"
import {
  handleInput,
  handleValidation,
} from "../../services/utils/general/validation_handlers/validationHandlers"

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState("")
  const [isPositiveFeedback, setIsPositiveFeedback] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation(["components/text"])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    gtmEvents.sendFeedbackTextAnalysis({ isPositiveFeedback, feedbackText })
    setIsModalOpen(false)
    sendFeedbackMessage(feedbackText, isPositiveFeedback)
  }

  return (
    <div className={styles.container}>
      <div className={styles.feedback_buttons}>
        <button
          className={styles.thumb_up}
          onClick={() => {
            setIsPositiveFeedback(true)
            setIsModalOpen(true)
          }}
        >
          👍
        </button>
        <button
          className={styles.thumb_down}
          onClick={() => {
            setIsPositiveFeedback(false)
            setIsModalOpen(true)
          }}
        >
          👎
        </button>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content} ref={modalRef}>
            <form onSubmit={handleSubmit} aria-label="Feedback Form">
              <label htmlFor="message">
                <input
                  name="message"
                  id="message"
                  required
                  placeholder={
                    isPositiveFeedback
                      ? (t("whatDoYouLikeAboutTheApp") as string)
                      : (t("whatCanBeImprovedInTheApp") as string)
                  }
                  onInvalid={(event) => handleValidation(event, t("pleaseFillThisField"))}
                  onInput={(event) => handleInput(event)}
                  onChange={(event) => setFeedbackText(event.target.value)}
                  aria-label="Write Message"
                ></input>
              </label>
              <div className={styles.modal_actions}>
                <button className={styles.send} type="submit">
                  {t("send")}
                </button>
                <button className={styles.cancel} onClick={() => setIsModalOpen(false)}>
                  {t("cancel")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feedback
