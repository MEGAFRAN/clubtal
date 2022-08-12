import styles from "../../../styles/sections/contact.module.scss"
import { Form } from "../../form/Form"

export const Contact = ({ title, formText }: any) => {
  return (
    <section id="contact" className={styles.container}>
      <h2>{title}</h2>
      <Form text={formText} />
    </section>
  )
}
