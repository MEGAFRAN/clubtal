import { SectionContactProps } from "../../../constants/types/components_props/types"
import styles from "../../../styles/sections/contact.module.scss"
import Form from "../../form/Form"

const SectionContact = ({ title, formText }: SectionContactProps) => (
  <section id="section-contact" className={styles.container}>
    <h2>{title}</h2>
    <Form text={formText} />
  </section>
)
export default SectionContact
