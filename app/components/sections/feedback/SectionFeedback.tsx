import { SectionContactProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/contact.module.scss"
import Feedback from "../../feedback/Feedback"

const SectionFeedback = ({ title, formText }: SectionContactProps) => (
  <section className={styles.container}>
    <h2>{title}</h2>
    <Feedback text={formText} />
  </section>
)
export default SectionFeedback
