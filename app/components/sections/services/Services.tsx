import styles from "../../../styles/sections/services.module.scss"
import { Button } from "../../button/Button"
import { List } from "../../list/List"

export const Services = ({ listData, title, buttonText }: any) => {
  return (
    <section id="services" className={styles.container}>
      <h2>{title}</h2>
      <List listData={listData} />
      <Button text={buttonText} style="cta" scrollToSection={"#contact"} />
    </section>
  )
}
