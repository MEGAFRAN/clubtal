import styles from "../../../styles/sections/dotted-card.module.scss"
import { Button } from "../../button/Button"
import { List } from "../../list/List"

export const SectionDottedCard = ({ listData, title, buttonText, sectionToScroll }: any) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <List listData={listData} />
      <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />
    </section>
  )
}
