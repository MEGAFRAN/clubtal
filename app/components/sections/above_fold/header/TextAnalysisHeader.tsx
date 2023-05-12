import styles from "../../../../styles/sections/text-analysis-header.module.scss"
import TextAnalysis from "../../../text_analysis/TextAnalysis"

const TextAnalysisHeader = ({ title }: any) => (
  <header className={styles.container}>
    <h1>{title}</h1>
    <TextAnalysis />
  </header>
)
export default TextAnalysisHeader
