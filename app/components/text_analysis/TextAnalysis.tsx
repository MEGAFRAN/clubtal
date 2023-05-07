import React, { useState } from "react"
import getTextAnalysis from "../../services/text_analysis/get-text-analysis"
import styles from "../../styles/components/text-analysis.module.scss"
import {
  EntityRecognitionState,
  KeyPhrasesState,
  SentimentAnalysisState,
  TextAnalysisProps,
} from "../../constants/types/components_props/types"
import {
  handleInput,
  handleValidation,
} from "../../services/utils/general/validation_handlers/validationHandlers"
import Loading from "../loading/Loading"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"
import FileUploader from "../file_uploader/FileUploader"
import countWordsRepetitions from "../../services/utils/general/count_words/countWordsRepetitions"

const TextAnalysis = ({
  textCta,
  inputCta,
  textAreaPlaceholder,
  inputPlaceholder,
  buttonText,
  requiredValueMessage,
  loadingText,
  userLanguage,
}: TextAnalysisProps) => {
  const [userMessageContext, setUserMessageContext] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [sentimentAnalysis, setSentimentAnalysis] = useState<SentimentAnalysisState[]>([])
  const [keyPhrases, setKeyPhrases] = useState<KeyPhrasesState[]>([])
  const [keyPhrasesCount, setKeyPhrasesCount] = useState<{ [key: string]: number }[]>([])
  const [entityRecognition, setEntityRecognition] = useState<EntityRecognitionState[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleDataUpdate = (data: string) => {
    setUserMessage(data)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      gtmEvents.sendMessageTextAnalysis({ userMessage, userMessageContext })
      setIsLoading(true)
      const response = await getTextAnalysis(userMessage, userMessageContext)
      const data = await response.json()
      setSentimentAnalysis(data?.sentimentAnalysis)
      setKeyPhrases(data?.keyPhrases)
      setEntityRecognition(data?.entityRecognition)
      const wordsToCount = data?.keyPhrases[0]?.keyPhrases || []
      const wordsRepetitions = countWordsRepetitions(userMessage, wordsToCount)
      setKeyPhrasesCount(wordsRepetitions)
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
        <FileUploader onDataUpdate={handleDataUpdate} />
        <textarea
          className={styles.user_message}
          id="user-message"
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
          maxProgress={100}
        />
        {!isLoading &&
        sentimentAnalysis?.length &&
        keyPhrases?.length &&
        entityRecognition?.length ? (
          <div className={styles.results_container}>
            <span>{userLanguage === "español" ? "INFORMACION DEL TEXTO" : "TEXT INFO"}</span>
            <div className={styles.sentiment_analysis}>
              <span>
                {userLanguage === "español"
                  ? "Sentimiento predominante: "
                  : "Prevailing sentiment: "}
                {sentimentAnalysis[0].sentiment}
              </span>
              <span>
                {userLanguage === "español" ? "Porcentaje positivo: " : "Positive percentage: "}
                {Math.round(sentimentAnalysis[0].confidenceScores.positive * 100)}%
              </span>
              <span>
                {userLanguage === "español" ? "Porcentaje neutral: " : "Neutral percentage: "}
                {Math.round(sentimentAnalysis[0].confidenceScores.neutral * 100)}%
              </span>
              <span>
                {userLanguage === "español" ? "Porcentaje negativo: " : "Negative percentage: "}
                {Math.round(sentimentAnalysis[0].confidenceScores.negative * 100)}%
              </span>
            </div>
            <div className={styles.key_phrases}>
              <span>
                {userLanguage === "español"
                  ? "Frases claves y cantidad de veces en el texto"
                  : "Key phrases and number of times in the text"}
              </span>
              <ol>
                {keyPhrasesCount.map((item, index) => {
                  const [name, count] = Object.entries(item)[0]
                  return (
                    <li key={index}>
                      {name}: {count}
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className={styles.entity_recognition}>
              <span>{userLanguage === "español" ? "Entidades " : "Entities "}</span>
              <ol>
                {entityRecognition[0].entities.map((entity, index) => (
                  <li key={index}>
                    {userLanguage === "español" ? "Texto: " : "Text: "}
                    {entity.text} <br />
                    {userLanguage === "español" ? "Categoría: " : "Category: "}
                    {entity.category}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default TextAnalysis
