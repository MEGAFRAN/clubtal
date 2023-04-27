import { SectionContentPageProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/content-page.module.scss"

function SectionContentPage({ content }: SectionContentPageProps) {
  return (
    <div className={styles.container}>
      <h1>{content.h1}</h1>
      <p>{content.firstP}</p>
      <h2>{content.firstH2}</h2>
      <p>{content.secondP}</p>
      <h2>{content.secondH2}</h2>
      <p>{content.thirdP}</p>
      <ol>
        {content.thirPUl.map((li: string, index: number) => (
          <li key={index}>{li}</li>
        ))}
      </ol>
      <h2>{content.thirdH2}</h2>
      <p>{content.fourthP}</p>
    </div>
  )
}
export default SectionContentPage
