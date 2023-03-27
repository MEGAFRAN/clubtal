import { useState } from "react"
import { FormProps } from "../../constants/types/components_props/types"
import { EMAIL_SERVICE_GENERAL } from "../../services/api/variables"
import { sendFormMessage } from "../../services/form_services/general_form/general-form.service"
import { _gtmEvents } from "../../services/google-tag-events.service"
import styles from "../../styles/components/form.module.scss"

export const Form = ({ text, endpoint = EMAIL_SERVICE_GENERAL }: FormProps) => {
  const [messageResponse, setMessageResponse] = useState<string>("")
  const [messageResponseStatus, setMessageResponseStatus] = useState<string>("")
  const [formMessage, setFormMessage] = useState<string>("")
  const [formName, setFormName] = useState<string>("")
  const [formEmail, setFormEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = (event: any): void => {
    event.preventDefault()
    if (!formMessage || !formName || !formEmail) {
      setMessageResponseStatus("error")
      setMessageResponse(
        "Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente",
      )
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
    _gtmEvents.formSubmit({ formMessage, formName, formEmail })
  }

  return (
    <form className={styles.container} onSubmit={onSubmit} aria-label="Contact Form">
      {text && (
        <>
          {" "}
          <h2>{text[0]}</h2>
          <label htmlFor="message">
            <span>{text[1]}</span>
            <textarea
              name="message"
              id="message"
              required
              placeholder={text[2]}
              cols={30}
              rows={3}
              onChange={(event) => setFormMessage(event.target.value)}
              aria-label="Write Message"
            ></textarea>
          </label>
          <label htmlFor="name">
            <span>{text[3]}</span>
            <input
              name="name"
              id="name"
              autoComplete="name"
              type="text"
              required
              placeholder={text[4]}
              onChange={(event) => setFormName(event.target.value)}
              aria-label="Full Name"
            />
          </label>
          <label htmlFor="email">
            <span>{text[5]}</span>
            <input
              name="email"
              id="email"
              autoComplete="email"
              type="email"
              required
              placeholder={text[6]}
              onChange={(event) => setFormEmail(event.target.value)}
              aria-label="Email Address"
            />
          </label>
          <div aria-live="polite" aria-atomic="true">
            <p className={`response-mensaje--${messageResponseStatus}`}>{messageResponse}</p>
          </div>
          <button className={loading ? styles.loading : ""} type="submit" disabled={loading}>
            {loading ? "Enviando..." : text[7]}
          </button>
        </>
      )}
    </form>
  )
}
