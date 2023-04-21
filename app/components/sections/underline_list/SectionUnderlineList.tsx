import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/underline-list.module.scss"
import Button from "../../button/Button"
import List from "../../list/List"

const SectionUnderlineList = ({
  listData,
  title,
  buttonText,
  sectionToScroll,
}: SectionGeneralProps) => (
  <section id="section-underline-list" className={styles.container}>
    <h2>{title}</h2>
    <List listData={listData} />
    <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />
  </section>
)
export default SectionUnderlineList
