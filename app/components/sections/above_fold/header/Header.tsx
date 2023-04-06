import { useState } from "react"
import styles from "../../../../styles/sections/header.module.scss"
import { HeaderProps } from "../../../../constants/types/components_props/types"
import LoginForm from "../../../login_form/login_form"
import generateMagicLink from "../../../../services/form_services/generate_magic_link/generate-magic-link.service"
import Navbar from "../navbar/Navbar"

const Header = ({ navbarOptions, title, text, buttonText }: HeaderProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (email: string) => {
    setIsSubmitting(true)
    setMessage("Submitting data...")

    const response = await generateMagicLink(email)

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
        options={navbarOptions}
        buttonText={buttonText[0]}
        mail={"info@clubtal.com"}
        withToogleMenu={false}
        withLanguageToggle={true}
        withLoginButton={true}
      />

      <h1>
        {title[0]} <em>{title[1]}</em> {title[2]}
      </h1>

      <p>
        {text[0]},<em> {text[1]}</em>
      </p>

      <div className={styles.cta_wrapper}>
        <LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting} message={message} />
      </div>
    </header>
  )
}
export default Header
