import styles from "../../../../styles/sections/header.module.scss"
import { HeaderProps } from "../../../../constants/types/components_props/types"
import LoginForm from "../../../login_form/login_form"
import Navbar from "../navbar/Navbar"
import Button from "../../../button/Button"

const Header = ({ title, text, buttonText, sectionToScroll, withMagicLink }: HeaderProps) => {
  const [buttonHero, ...resButton] = buttonText || []
  return (
    <header className={styles.container}>
      <Navbar
        buttonText={resButton}
        mail={"info@clubtal.com"}
        withToogleMenu={false}
        withLanguageToggle={false}
        withLoginButton={true}
        withContactButton={false}
        withHomeButton={true}
        sectionToScroll={sectionToScroll}
      />

      <h1>
        {title[0]} <em>{title[1]}</em> {title[2]}
      </h1>

      <p>
        {text[0]},<em> {text[1]}</em>
      </p>

      <div className={styles.cta_wrapper}>
        {withMagicLink ? (
          <LoginForm />
        ) : (
          <Button text={buttonHero} style="cta" scrollToSection={sectionToScroll} />
        )}
      </div>
    </header>
  )
}
export default Header
