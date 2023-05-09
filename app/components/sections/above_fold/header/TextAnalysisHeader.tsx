import { HeaderProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/sections/text-analysis-header.module.scss"
import TextAnalysis from "../../../text_analysis/TextAnalysis"

const TextAnalysisHeader = ({ title }: HeaderProps) => (
  <header className={styles.container}>
    <h1>{title[2]}</h1>
    <TextAnalysis />
  </header>
)
export default TextAnalysisHeader
