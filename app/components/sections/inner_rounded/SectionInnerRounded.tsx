import styles from "../../../styles/sections/inner-rounded.module.scss"
import { Button } from "../../button/Button"
import { List } from "../../list/List"

export const SectionInnerRounded = ({ listData, title, buttonText }: any) => {
  return (
    <section id="section-inner-rounded" className={styles.container}>
      <h2>{title}</h2>
      <List listData={listData} />
      <Button text={buttonText} style="cta" scrollToSection={"#contact"} />
    </section>
  )
}
