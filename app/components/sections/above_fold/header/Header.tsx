import { Button } from "../../../button/Button"
import { Navbar } from "../navbar/Navbar"
import styles from "../../../../styles/sections/header.module.scss"
import { HeaderProps } from "../../../../constants/types/components_props/types"

export const Header = ({
  navbarOptions,
  setSecondaryLanguage,
  title,
  text,
  buttonText,
  sectionToScroll,
}: HeaderProps) => {
  const crownImage = "/images/crown.svg"
  return (
    <header className={styles.container}>
      <Navbar
        options={navbarOptions}
        setSecondaryLanguage={setSecondaryLanguage}
        buttonText={buttonText[0]}
        mail={"info@clubtal.com"}
        withLanguageToggle={false}
        withLoginButton={true}
      />

      <h1>
        {title[0]} <em>{title[1]}</em> {title[2]}
      </h1>

      <p>
        {text[0]},<em> {text[1]}</em>
      </p>

      <div className={styles.cta_wrapper}>
        <img src={crownImage} alt="crown" />
        <Button text={buttonText[0]} style="cta" scrollToSection={sectionToScroll} />
      </div>
    </header>
  )
}
