import { useState } from "react"
import getSentimentAnalysis from "../../services/text_analysis/get-sentiment-analysis"
import styles from "../../styles/components/text-analysis.module.scss"
import { TextAnalysisProps } from "../../constants/types/components_props/types"

const TextAnalysis = ({
  textCta,
  inputCta,
  textAreaPlaceholder,
  inputPlaceholder,
  buttonText,
}: TextAnalysisProps) => {
  const [userMessageContext, setUserMessageContext] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [textAnalysisResponse, setTextAnalysisResponse] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!userMessage.trim() || !userMessageContext.trim()) {
      setErrorMessage("Please fill out both fields.")
      return
    }

    try {
      const response = await getSentimentAnalysis(userMessage, userMessageContext)
      const data = await response.json()
      setTextAnalysisResponse(data.content)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  function handleValidation(event: React.FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement
    input.setCustomValidity("This field is required.")
  }

  function handleInput(event: React.FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement
    input.setCustomValidity("")
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
          onInvalid={handleValidation}
          onInput={handleInput}
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
          onInvalid={handleValidation}
          onInput={handleInput}
          required
        />
        <button type="submit">{buttonText}</button>
        {textAnalysisResponse && <p>{textAnalysisResponse}</p>}
        {errorMessage && (
          <p id="error-message" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default TextAnalysis
