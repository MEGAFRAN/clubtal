import styles from "../../../../styles/sections/header.module.scss"
import { HeaderProps } from "../../../../constants/types/components_props/types"
import LoginForm from "../../../login_form/login_form"
import Navbar from "../navbar/Navbar"
import Button from "../../../button/Button"

const Header = ({
  title,
  text,
  buttonText,
  sectionToScroll,
  withMagicLink,
  callToAction,
}: HeaderProps) => (
  <header className={styles.container}>
    <Navbar buttonText={buttonText} withHomeButton={true} />
    <h1>{title}</h1>

    <p>{text}</p>

    <div className={styles.cta_wrapper}>
      {withMagicLink ? (
        <LoginForm />
      ) : (
        <div className={styles.buttons}>
          <Button text={callToAction} style="cta" scrollToSection={sectionToScroll} />
        </div>
      )}
    </div>
  </header>
)
export default Header
