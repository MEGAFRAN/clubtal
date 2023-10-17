import React, { useState } from "react"
import styles from "../../styles/components/email-form.module.scss"

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // You can send the email to your API or do whatever is needed with it
    console.log("Email submitted:", email)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Escribe tu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-label="Email address"
        required
      />
      <button type="submit">Recibir Guía</button>
    </form>
  )
}

export default EmailForm
