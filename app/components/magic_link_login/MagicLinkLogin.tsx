import React, { useState } from "react"
import createMagicLink from "../../services/form_services/create_magic_link/create-magic-link.service"

const MagicLinkLogin = () => {
  const [email, setEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const generateMagicLink = async () => {
    setIsLoading(true)
    setError("")
    setMessage("")

    try {
      const response = await createMagicLink(email)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message)
      }

      setMessage("Magic link generated and sent")
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong")
      } else {
        setError("Something went wrong")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1>Magic Link Service</h1>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button onClick={generateMagicLink} disabled={isLoading}>
        Generate Magic Link
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  )
}

export default MagicLinkLogin
