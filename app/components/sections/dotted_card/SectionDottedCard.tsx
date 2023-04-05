import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/dotted-card.module.scss"
import Button from "../../button/Button"
import List from "../../list/List"

const SectionDottedCard = ({ listData, title, buttonText, linkTo }: SectionGeneralProps) => (
  <section className={styles.container}>
    <h2>{title}</h2>
    <List listData={listData} />
    <Button text={buttonText} style="cta" linkTo={linkTo} />
  </section>
)
export default SectionDottedCard
