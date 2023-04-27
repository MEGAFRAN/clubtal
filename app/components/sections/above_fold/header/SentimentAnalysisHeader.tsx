import { HeaderProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/sections/sentiment-analysis-header.module.scss"
import TextAnalysis from "../../../text_analysis/TextAnalysis"

const SentimentAnalysisHeader = ({ title, text, buttonText }: HeaderProps) => (
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
    />
  </header>
)
export default SentimentAnalysisHeader
