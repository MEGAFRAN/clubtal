import { useState } from "react"
import { useTranslation } from "next-i18next"
import { FormProps } from "../../constants/types/components_props/types"
import { EMAIL_SERVICE_GENERAL } from "../../services/api/variables"
import sendFormMessage from "../../services/form_services/general_form/general-form.service"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"
import styles from "../../styles/components/form.module.scss"

const Form = ({ endpoint = EMAIL_SERVICE_GENERAL }: FormProps) => {
  const [messageResponse, setMessageResponse] = useState<string>("")
  const [messageResponseStatus, setMessageResponseStatus] = useState<string>("")
  const [formMessage, setFormMessage] = useState<string>("")
  const [formName, setFormName] = useState<string>("")
  const [formEmail, setFormEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const { t } = useTranslation(["components/text"])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!formMessage || !formName || !formEmail) {
      setMessageResponseStatus("error")
      setMessageResponse(t("pleaseAllFieldsOfTheForm") as string)
      return
    }

    setLoading(true)
    sendFormMessage(
      endpoint,
      formMessage,
      formName,
      formEmail,
      setMessageResponseStatus,
      setMessageResponse,
      setLoading,
    )
    gtmEvents.formSubmit({ formMessage, formName, formEmail })
  }

  return (
    <form className={styles.container} onSubmit={onSubmit} aria-label="Contact Form">
      <>
        <h2>{t("tellUsAboutYourself")}</h2>
        <label htmlFor="message">
          <span>{t("whatDoYouNeedInYourBusiness")}</span>
          <textarea
            name="message"
            id="message"
            required
            placeholder={t("writeHereWhatYouNeed") as string}
            cols={30}
            rows={3}
            onChange={(event) => setFormMessage(event.target.value)}
            aria-label="Write Message"
            data-testid="user-message"
          ></textarea>
        </label>
        <label htmlFor="name">
          <span>{t("myName")}</span>
          <input
            name="name"
            id="name"
            autoComplete="name"
            type="text"
            required
            placeholder={t("writeYourNameHere") as string}
            onChange={(event) => setFormName(event.target.value)}
            aria-label="Full Name"
            data-testid="user-name"
          />
        </label>
        <label htmlFor="email">
          <span>{t("myEmail")}</span>
          <input
            name="email"
            id="email"
            autoComplete="email"
            type="email"
            required
            placeholder={t("writeYourEmailHere") as string}
            onChange={(event) => setFormEmail(event.target.value)}
            aria-label="Email Address"
            data-testid="user-email"
          />
        </label>
        <div aria-live="polite" aria-atomic="true">
          <p className={`response-mensaje--${messageResponseStatus}`}>{messageResponse}</p>
        </div>
        <button
          className={loading ? styles.loading : ""}
          type="submit"
          disabled={loading}
          data-testid="submit-button"
        >
          {loading ? t("sending") : t("sendMyMessage")}
        </button>
      </>
    </form>
  )
}

export default Form
