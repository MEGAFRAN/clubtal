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

  async function handleSubmit() {
    if (!userMessage.trim()) return

    try {
      const response = await getSentimentAnalysis(userMessage)
      const data = await response.json()
      setTextAnalysisResponse(data.content)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.container}>
      <span>{textCta}</span>
      <textarea
        placeholder={textAreaPlaceholder}
        value={userMessage}
        onChange={(event) => setUserMessage(event.target.value)}
      />
      <span>{inputCta}</span>
      <input
        placeholder={inputPlaceholder}
        value={userMessageContext}
        onChange={(event) => setUserMessageContext(event.target.value)}
      />
      <button onClick={handleSubmit}>{buttonText}</button>
      {textAnalysisResponse ? <p>{textAnalysisResponse}</p> : null}
    </div>
  )
}

export default TextAnalysis
