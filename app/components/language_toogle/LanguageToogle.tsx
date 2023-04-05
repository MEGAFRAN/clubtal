import { LanguageToogleProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/language-toogle.module.scss"

const LanguageToogle = ({
  setSecondaryLanguage,
  isSecondaryLanguage,
  mainLanguage = "Español",
  secondaryLanguage = "English",
}: LanguageToogleProps) => (
  <div className={styles.container}>
    {isSecondaryLanguage ? (
      <button onClick={() => (setSecondaryLanguage ? setSecondaryLanguage(false) : null)}>
        {mainLanguage}
      </button>
    ) : (
      <button onClick={() => (setSecondaryLanguage ? setSecondaryLanguage(true) : null)}>
        {secondaryLanguage}
      </button>
    )}
  </div>
)

export default LanguageToogle
