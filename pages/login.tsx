import { NextPage } from "next"
import { useState } from "react"
import LoginForm from "../app/components/login_form/login_form"
import generateMagicLink from "../app/services/form_services/generate_magic_link/generate-magic-link.service"

const LoginPage: NextPage = () => {
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

  return <LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting} message={message} />
}

export default LoginPage
