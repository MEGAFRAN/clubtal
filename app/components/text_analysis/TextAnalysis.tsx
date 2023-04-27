import { useState } from "react"
import getSentimentAnalysis from "../../services/text_analysis/get-sentiment-analysis"
import styles from "../../styles/components/text-analysis.module.scss"
import { TextAnalysisProps } from "../../constants/types/components_props/types"
import { handleInput, handleValidation } from "../../services/utils/validationHandlers"
import Loading from "../loading/Loading"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"

const TextAnalysis = ({
  textCta,
  inputCta,
  textAreaPlaceholder,
  inputPlaceholder,
  buttonText,
  requiredValueMessage,
  loadingText,
}: TextAnalysisProps) => {
  const [userMessageContext, setUserMessageContext] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [textAnalysisResponse, setTextAnalysisResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      gtmEvents.sendMessageTextAnalysis({ userMessage, userMessageContext })
      setIsLoading(true)
      const response = await getSentimentAnalysis(userMessage, userMessageContext)
      const data = await response.json()
      setTextAnalysisResponse(data.content)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-message">{textCta}</label>
        <input
          className={styles.user_message}
          id="user-message"
          type="text"
          placeholder={textAreaPlaceholder}
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
          aria-label={textAreaPlaceholder}
          aria-invalid={!userMessage.trim()}
          aria-describedby="user-message-error"
          onInvalid={(event) => handleValidation(event, requiredValueMessage)}
          onInput={(event) => handleInput(event)}
          required
        />
        <label htmlFor="user-message-context">{inputCta}</label>
        <input
          className={styles.user_message_context}
          id="user-message-context"
          type="text"
          placeholder={inputPlaceholder}
          value={userMessageContext}
          onChange={(event) => setUserMessageContext(event.target.value)}
          aria-label={inputPlaceholder}
          aria-invalid={!userMessageContext.trim()}
          aria-describedby="user-message-context-error"
          onInvalid={(event) => handleValidation(event, requiredValueMessage)}
          onInput={(event) => handleInput(event)}
          required
        />
        <Loading
          isLoading={isLoading}
          buttonText={buttonText}
          loadingText={loadingText}
          maxProgress={350}
        />
        {!isLoading && textAnalysisResponse && <p>{textAnalysisResponse}</p>}
      </form>
    </div>
  )
}

export default TextAnalysis
