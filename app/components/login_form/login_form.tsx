import { useState } from "react"
import styles from "../../styles/components/login-form.module.scss"

type LoginFormProps = {
  onSubmit: (email: string) => Promise<void>
  isSubmitting: boolean
  message: string
}

export const LoginForm = ({ onSubmit, isSubmitting, message }: LoginFormProps) => {
  const [email, setEmail] = useState("")

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onSubmit(email)
  }

  return (
    <form className={styles.container} onSubmit={handleLoginSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        placeholder="&#9993;"
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button disabled={isSubmitting}>{isSubmitting ? "Sending" : "Send"}</button>
      <p>{message}</p>
    </form>
  )
}
