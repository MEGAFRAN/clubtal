import { LanguageToogleProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/language-toogle.module.scss"

export const LanguageToogle = ({
  setSecondaryLanguage,
  mainLanguage = "Español",
  secondaryLanguage = "English",
}: LanguageToogleProps) => {
  return (
    <div className={styles.container}>
      <button onClick={() => setSecondaryLanguage(true)}>{secondaryLanguage}</button>
      <button onClick={() => setSecondaryLanguage(false)}>{mainLanguage}</button>
    </div>
  )
}
