import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/simple-space.module.scss"
import Button from "../../button/Button"
import List from "../../list/List"

const SectionSimpleSpace = ({
  listData,
  title,
  buttonText,
  sectionToScroll,
}: SectionGeneralProps) => (
  <section className={styles.container}>
    <h2>{title}</h2>
    <List listData={listData} />
    <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />
  </section>
)
export default SectionSimpleSpace
