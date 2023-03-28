import { LanguageToogleProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/language-toogle.module.scss"

const LanguageToogle = ({
  setSecondaryLanguage,
  mainLanguage = "Español",
  secondaryLanguage = "English",
}: LanguageToogleProps) => (
  <div className={styles.container}>
    <button onClick={() => (setSecondaryLanguage ? setSecondaryLanguage(true) : null)}>
      {secondaryLanguage}
    </button>
    <button onClick={() => (setSecondaryLanguage ? setSecondaryLanguage(false) : null)}>
      {mainLanguage}
    </button>
  </div>
)
export default LanguageToogle
