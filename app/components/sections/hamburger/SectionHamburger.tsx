import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/hamburger.module.scss"
import Button from "../../button/Button"
import List from "../../list/List"

const SectionHamburger = ({ listData, title, buttonText, linkTo }: SectionGeneralProps) => (
  <section id="section-hamburger" className={styles.container}>
    <h2>{title}</h2>
    <List listData={listData} />
    <Button text={buttonText} style="cta" linkTo={linkTo} />
  </section>
)
export default SectionHamburger
