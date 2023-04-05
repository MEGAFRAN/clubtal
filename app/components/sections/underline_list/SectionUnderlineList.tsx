import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/underline-list.module.scss"
import Button from "../../button/Button"
import List from "../../list/List"

const SectionUnderlineList = ({ listData, title, buttonText, linkTo }: SectionGeneralProps) => (
  <section id="section-underline-list" className={styles.container}>
    <h2>{title}</h2>
    <List listData={listData} />
    <Button text={buttonText} style="cta" linkTo={linkTo} />
  </section>
)
export default SectionUnderlineList
