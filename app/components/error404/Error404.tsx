import { Button } from "../button/Button"
import { Error404Props } from "../../constants/types/components_props/types"
import styles from "../../styles/components/error404.module.scss"

const Error404 = ({
  text,
  buttonText,
  handleClick,
  scrollToSection,
  styleButton,
}: Error404Props) => (
  <section className={styles.container}>
    <h1>
      <span>4</span>0<span>4</span>
    </h1>
    <p>{text}</p>
    <Button
      text={buttonText}
      handleClick={handleClick}
      scrollToSection={scrollToSection}
      style={styleButton}
    />
  </section>
)

export default Error404
