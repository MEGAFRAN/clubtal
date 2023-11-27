import React, { useState } from "react"
import styles from "../../styles/components/specialization-form.module.scss"
import specializationOrientationChatBot from "../../services/form_services/specialization_orientation_chat_bot/specialization-orientation-bot.service"
import Loading from "../loading/Loading"

interface FormComponentProps {
  questions: Array<Array<string>>
}

const SpecializationForm: React.FC<FormComponentProps> = ({ questions }) => {
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [chatbotResponse, setChatBotResponse] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (key: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setChatBotResponse("")
    setIsLoading(true)

    if (!formValues) return

    try {
      const response = await specializationOrientationChatBot(JSON.stringify(formValues))

      if (response.status !== 200) {
        console.error("Error:", response.statusText)
        return
      }

      const data = await response.json()
      const assistantResponse = data.content
      if (assistantResponse && typeof assistantResponse === "string")
        setChatBotResponse(assistantResponse)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {questions.map(([label, placeholder], index) => (
          <div key={index} className={styles.textarea_group}>
            <label htmlFor={label}>{label}</label>
            <textarea
              id={label}
              placeholder={placeholder}
              required
              cols={30}
              rows={3}
              data-testid={placeholder}
              aria-label={placeholder}
              value={formValues[label] || ""}
              onChange={(e) => handleChange(label, e.target.value)}
            />
          </div>
        ))}
        <button type="submit" className={styles.submitButton}>
          Iniciar analisis
        </button>
      </form>
      {!chatbotResponse && (
        <Loading isLoading={isLoading} maxProgress={200} loadingMessage={"Analizando..."} />
      )}
      {chatbotResponse && (
        <div className={styles.response} dangerouslySetInnerHTML={{ __html: chatbotResponse }} />
      )}
    </div>
  )
}

export default SpecializationForm
