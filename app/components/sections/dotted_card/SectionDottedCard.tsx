import { SectionGeneralProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/dotted-card.module.scss"
import List from "../../list/List"

const SectionDottedCard = ({
  listData,
  title,
  buttonText,
  sectionToScroll,
}: SectionGeneralProps) => (
  <section className={styles.container}>
    <h2>{title}</h2>
    <List listData={listData} />
  </section>
)
export default SectionDottedCard
