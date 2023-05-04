import { useContext } from "react"
import {
  HeaderProps,
  LanguageContextValue,
} from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/sections/text-analysis-header.module.scss"
import TextAnalysis from "../../../text_analysis/TextAnalysis"
import languageContext from "../../../../contexts/languageContext/languageContext"

const TextAnalysisHeader = ({ title, text, buttonText }: HeaderProps) => {
  const { userLanguage } = useContext(languageContext) as LanguageContextValue

  return (
    <header className={styles.container}>
      <h1>{title[2]}</h1>
      <TextAnalysis
        textCta={title[0]}
        inputCta={title[1]}
        buttonText={buttonText[0]}
        textAreaPlaceholder={text[0]}
        inputPlaceholder={text[1]}
        requiredValueMessage={text[2]}
        loadingText={text[4]}
        userLanguage={userLanguage}
      />
    </header>
  )
}
export default TextAnalysisHeader
