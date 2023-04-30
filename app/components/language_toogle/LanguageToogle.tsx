// LanguageToogle.js
import { useEffect, useContext, useCallback } from "react"
import styles from "../../styles/components/language-toogle.module.scss"
import languageContext from "../../contexts/languageContext/languageContext"
import {
  LanguageContextValue,
  LanguageToogleProps,
} from "../../constants/types/components_props/types"
import getUserLanguage from "../../services/utils/languageValidator"

const LanguageToogle = ({
  mainLanguage = "Eng",
  secondaryLanguage = "Esp",
}: LanguageToogleProps) => {
  const { userLanguage, setUserLanguage } = useContext(languageContext) as LanguageContextValue

  useEffect(() => {
    setUserLanguage(getUserLanguage())
  }, [setUserLanguage])

  const toggleLanguage = useCallback(() => {
    setUserLanguage(userLanguage === "english" ? "español" : "english")
  }, [setUserLanguage, userLanguage])

  return (
    <>
      {userLanguage === "english" ? (
        <button className={styles.language_toogle} onClick={toggleLanguage}>
          {secondaryLanguage}
        </button>
      ) : (
        <button className={styles.language_toogle} onClick={toggleLanguage}>
          {mainLanguage}
        </button>
      )}
    </>
  )
}

export default LanguageToogle
