import { useState, useEffect, memo, useCallback } from "react"
import { useTranslation } from "next-i18next"
import { LoadingProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/loading.module.scss"

const Loading = ({ isLoading, maxProgress }: LoadingProps) => {
  const [progressValue, setProgressValue] = useState(0)
  const { t } = useTranslation(["components/text"])

  const incrementProgressValue = useCallback(() => {
    setProgressValue((prevProgressValue) => prevProgressValue + 1)
  }, [])

  useEffect(() => {
    let intervalId: number | undefined

    if (isLoading) {
      intervalId = window.setInterval(incrementProgressValue, 100)
    } else {
      clearInterval(intervalId)
      setProgressValue(0)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isLoading, incrementProgressValue])

  return (
    <>
      {isLoading ? (
        <div className={styles.container}>
          <span>{t("analyzing")}</span>
          <progress
            value={progressValue}
            max={maxProgress}
            role="progressbar"
            aria-valuetext={`Loading ${t("analyzing")}: ${progressValue}%`}
            aria-label="Loading progress"
          ></progress>
        </div>
      ) : (
        <button disabled={isLoading} type="submit">
          {t("freeTextAnalysis")}
        </button>
      )}
    </>
  )
}

export default memo(Loading)
