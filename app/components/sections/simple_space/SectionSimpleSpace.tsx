import styles from "../../../styles/sections/simple-space.module.scss"
import { Button } from "../../button/Button"
import { List } from "../../list/List"

export const SectionSimpleSpace = ({ listData, title, buttonText, sectionToScroll }: any) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <List listData={listData} />
      <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />
    </section>
  )
}
