import { ErrorCommonPagesProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/errorCommonPages.module.scss"
import Button from "../button/Button"

const ErrorCommonPages = ({
  codeError,
  text,
  buttonText,
  handleClick,
  scrollToSection,
  styleButton,
}: ErrorCommonPagesProps) => (
  <section className={styles.container}>
    <h1>
      <span>{codeError.charAt(0)}</span>
      <span>{codeError.charAt(1)}</span>
      <span>{codeError.charAt(2)}</span>
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

export default ErrorCommonPages
