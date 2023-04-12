// LanguageToogle.js
import { useEffect, useContext } from "react"
import styles from "../../styles/components/language-toogle.module.scss"
import languageContext from "../../contexts/languageContext/languageContext"
import {
  LanguageContextValue,
  LanguageToogleProps,
} from "../../constants/types/components_props/types"

const LanguageToogle = ({
  mainLanguage = "Esp",
  secondaryLanguage = "Eng",
}: LanguageToogleProps) => {
  const { isSecondaryLanguage, setSecondaryLanguage } = useContext(
    languageContext,
  ) as LanguageContextValue

  useEffect(() => {
    const getUserLanguage = () => {
      const { language } = navigator

      if (language.startsWith("en")) return "en"
      if (language.startsWith("es")) return "es"
      return "en"
    }

    const userLanguage = getUserLanguage()
    setSecondaryLanguage(userLanguage === "en")
  }, [setSecondaryLanguage])

  const toggleLanguage = () => {
    setSecondaryLanguage(!isSecondaryLanguage)
  }

  return (
    <>
      {isSecondaryLanguage ? (
        <button className={styles.language_toogle} onClick={toggleLanguage}>
          {mainLanguage}
        </button>
      ) : (
        <button className={styles.language_toogle} onClick={toggleLanguage}>
          {secondaryLanguage}
        </button>
      )}
    </>
  )
}

export default LanguageToogle
