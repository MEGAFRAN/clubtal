import React, { useState } from "react"
import styles from "../../styles/components/email-form.module.scss"
import downloadAsset from "../../services/form_services/download_asset/download-asset.service"
import addCmsUserEmail from "../../services/cms/add-cms-user-email"

const EmailForm = () => {
  const [email, setEmail] = useState("")
  const [wasEmailSubmitted, setWasEmailSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await downloadAsset(
        "10_VERDADES_DE_LAS_VACANTES_DE_DESARROLLO_DE_SOFTWARE.pdf?sp=r&st=2023-10-18T23:09:28Z&se=2023-11-02T07:09:28Z&sv=2022-11-02&sr=b&sig=gWlsBfiVfw2B4tAx7qTaRp%2FuP1kmI4QMIK0ooKntfpQ%3D",
        "10_VERDADES_DE_LAS_VACANTES_DE_DESARROLLO_DE_SOFTWARE.pdf",
      )
      if (!wasEmailSubmitted) setWasEmailSubmitted(true)
      await addCmsUserEmail(email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
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
      {wasEmailSubmitted && (
        <p>
          Gracias, pronto recibirás información valiosa, para llevar al siguiente nivel tu carrera
          en desarrollo de software
        </p>
      )}
    </div>
  )
}

export default EmailForm
