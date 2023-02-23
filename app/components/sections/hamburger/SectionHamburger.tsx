import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/hamburger.module.scss"
import { Button } from "../../button/Button"
import { List } from "../../list/List"

export const SectionHamburger = ({
  listData,
  title,
  buttonText,
  sectionToScroll,
}: SectionGeneralProps) => {
  return (
    <section id="section-hamburger" className={styles.container}>
      <h2>{title}</h2>
      <List listData={listData} />
      <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />
    </section>
  )
}
