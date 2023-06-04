import React, { useState } from "react"
import { useTranslation } from "next-i18next"
import getTextAnalysis from "../../../app/services/text_analysis/get-text-analysis"
import styles from "../../../app/styles/components/text-analysis.module.scss"
import {
  EntityRecognitionState,
  KeyPhrasesState,
  SentimentAnalysisState,
} from "../../../app/constants/types/components_props/types"
import {
  handleInput,
  handleValidation,
} from "../../../app/services/utils/general/validation_handlers/validationHandlers"
import Loading from "../../../app/components/loading/Loading"
import gtmEvents from "../../../app/services/analytics/events/google-tag-events.service"
import FileUploader from "../file_uploader/FileUploader"
import countWordsRepetitions from "../../../app/services/utils/general/count_words/countWordsRepetitions"

const TextAnalysis = () => {
  const [userMessageContext, setUserMessageContext] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [sentimentAnalysis, setSentimentAnalysis] = useState<SentimentAnalysisState[]>([])
  const [keyPhrases, setKeyPhrases] = useState<KeyPhrasesState[]>([])
  const [keyPhrasesCount, setKeyPhrasesCount] = useState<{ [key: string]: number }[]>([])
  const [entityRecognition, setEntityRecognition] = useState<EntityRecognitionState[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation(["components/text"])

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
        <label htmlFor="user-message">{t("discoverTheInformationOfYourText")}</label>
        <FileUploader onDataUpdate={handleDataUpdate} />
        <textarea
          className={styles.user_message}
          id="user-message"
          placeholder={t("orEnterTheTextYoWishToBeAnalyzed") as string}
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
          aria-label={t("orEnterTheTextYoWishToBeAnalyzed") as string}
          aria-invalid={!userMessage.trim()}
          aria-describedby="user-message-error"
          onInvalid={(event) => handleValidation(event, t("pleaseFillThisField"))}
          onInput={(event) => handleInput(event)}
          required
        />
        <label htmlFor="user-message-context">{t("enterAContext")}</label>
        <input
          className={styles.user_message_context}
          id="user-message-context"
          type="text"
          placeholder={t("context") as string}
          value={userMessageContext}
          onChange={(event) => setUserMessageContext(event.target.value)}
          aria-label={t("context") as string}
          aria-invalid={!userMessageContext.trim()}
          aria-describedby="user-message-context-error"
          onInvalid={(event) => handleValidation(event, t("pleaseFillThisField"))}
          onInput={(event) => handleInput(event)}
          required
        />
        <Loading
          isLoading={isLoading}
          maxProgress={100}
          loadingMessage={t("analyzing") as string}
        />
        {!isLoading &&
        sentimentAnalysis?.length &&
        keyPhrases?.length &&
        entityRecognition?.length ? (
          <div className={styles.results_container}>
            <span>{t("textInformation")}</span>
            <div className={styles.sentiment_analysis}>
              <span>
                {t("prevailingSentiment")}
                {sentimentAnalysis[0].sentiment}
              </span>
              <span>
                {t("positivePercentage")}
                {Math.round(sentimentAnalysis[0].confidenceScores.positive * 100)}%
              </span>
              <span>
                {t("neutralPercentage")}
                {Math.round(sentimentAnalysis[0].confidenceScores.neutral * 100)}%
              </span>
              <span>
                {t("negativePercentage")}
                {Math.round(sentimentAnalysis[0].confidenceScores.negative * 100)}%
              </span>
            </div>
            <div className={styles.key_phrases}>
              <span>{t("keyPhrasesAndNumberOfTimesInTheText")}</span>
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
              <span>{t("entities")}</span>
              <ol>
                {entityRecognition[0].entities.map((entity, index) => (
                  <li key={index}>
                    {t("text")}
                    {entity.text} <br />
                    {t("category")}
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