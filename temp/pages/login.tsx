import { NextPage } from "next"
import { useState } from "react"
import LoginForm from "../../app/components/login_form/login_form"
import createMagicLink from "../../app/services/form_services/create_magic_link/create-magic-link.service"

const LoginPage: NextPage = () => {
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

  return <LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting} message={message} />
}

export default LoginPage
