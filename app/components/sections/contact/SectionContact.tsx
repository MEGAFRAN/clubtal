import styles from "../../../styles/sections/contact.module.scss"
import { Form } from "../../form/Form"

export const SectionContact = ({ title, formText }: any) => {
  return (
    <section id="section-contact" className={styles.container}>
      <h2>{title}</h2>
      <Form text={formText} />
    </section>
  )
}
