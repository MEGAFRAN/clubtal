import { useState } from "react"
import styles from "../../styles/components/login-form.module.scss"
import { LoginFormProps } from "../../constants/types/components_props/types"

const LoginForm = ({ onSubmit, isSubmitting, message }: LoginFormProps) => {
  const [email, setEmail] = useState("")

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onSubmit(email)
  }

  return (
    <form className={styles.container} onSubmit={handleLoginSubmit}>
      <input
        placeholder="Ingresa tu correo empresarial"
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button disabled={isSubmitting}>{isSubmitting ? "Sending" : "Pruébame gratis"}</button>
      <ul>
        <li>Compatible con todos los sitios web</li> <li>Gratis prueba de 7 dias</li>
      </ul>
      <p>{message}</p>
    </form>
  )
}
export default LoginForm
