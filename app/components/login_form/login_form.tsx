import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "next-i18next"
import styles from "../../styles/components/login-form.module.scss"
import createMagicLink from "../../services/form_services/create_magic_link/create-magic-link.service"
import Loading from "../loading/Loading"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation(["components/text"])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)
    setIsLoading(true)

    const response = await createMagicLink(email)

    if (response.ok) {
      setMessage(t("aMagicLinkHasBeenSentToYourEmail") as string)
    } else {
      setMessage(t("pleaseAllFieldsOfTheForm") as string)
    }

    setIsLoading(false)
    setIsSubmitting(false)
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label htmlFor="email">{t("enterToClubtal")}</label>
        <div className={styles.input_container}>
          <input
            placeholder={t("writeYourEmailHere") as string}
            type="email"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            ref={inputRef}
            name="email"
            autoComplete="email"
          />
          <button disabled={isSubmitting}>&#10132;</button>
        </div>
        <Loading
          isLoading={isLoading}
          maxProgress={100}
          loadingMessage={t("validatingEmail") as string}
        />
        <p aria-live="polite">{message}</p>
      </form>
    </>
  )
}

export default React.memo(LoginForm)
