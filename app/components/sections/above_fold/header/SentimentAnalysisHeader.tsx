import { useState } from "react"
import styles from "../../../../styles/sections/header.module.scss"
import { HeaderProps } from "../../../../constants/types/components_props/types"
import LoginForm from "../../../login_form/login_form"
import Navbar from "../navbar/Navbar"
import Button from "../../../button/Button"
import createMagicLink from "../../../../services/form_services/create_magic_link/create-magic-link.service"
import TextAnalysis from "../../../text_analysis/TextAnalysis"

const SentimentAnalysisHeader = ({
  title,
  text,
  buttonText,
  sectionToScroll,
  withMagicLink,
}: HeaderProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (email: string) => {
    setIsSubmitting(true)
    setMessage("Submitting data...")

    const response = await createMagicLink(email)

    if (response.ok) {
      setMessage("Magic link sent to email, please verify.")
    } else {
      setMessage("Error: Please try filling the form again.")
    }

    setIsSubmitting(false)
  }

  return (
    <header className={styles.container}>
      <Navbar
        buttonText={buttonText}
        mail={"info@clubtal.com"}
        withToogleMenu={false}
        withLanguageToggle={true}
        withLoginButton={false}
        withContactButton={true}
        withHomeButton={true}
        sectionToScroll={sectionToScroll}
      />

      <TextAnalysis
        textCta={title[0]}
        inputCta={title[1]}
        buttonText={buttonText[0]}
        textAreaPlaceholder={text[0]}
        inputPlaceholder={text[1]}
      />
    </header>
  )
}
export default SentimentAnalysisHeader
