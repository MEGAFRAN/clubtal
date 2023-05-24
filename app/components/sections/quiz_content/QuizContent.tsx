import { SectionQuizContentProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/quiz-content.module.scss"

const SectionQuizContent = ({ titles, paragraphs }: SectionQuizContentProps) => {
  if (titles.length !== paragraphs.length) {
    console.error("The number of titles and paragraphs should be equal.")
    return null
  }

  return (
    <section className={styles.container}>
      {titles.map((title, index) => (
        <div key={index}>
          <h2>{title}</h2>
          {paragraphs[index] && <p>{paragraphs[index]}</p>}
        </div>
      ))}
    </section>
  )
}

export default SectionQuizContent
