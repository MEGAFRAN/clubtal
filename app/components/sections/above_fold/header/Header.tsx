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
        withLoginButton={false}
        withContactButton={false}
        withHomeButton={false}
        withDownloadAndroidButton={true}
        withDownloadIosButton={true}
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
          <div className={styles.buttons}>
            <Button
              text="Descargar para Android"
              style="cta"
              linkTo="https://play.google.com/store/apps"
            />
            <Button
              text="Descargar para Iphone"
              style="cta"
              linkTo="https://www.apple.com/co/app-store/"
            />
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
