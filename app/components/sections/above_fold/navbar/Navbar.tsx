import { useState } from "react"
import { NavbarProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/components/navbar.module.scss"
import { Button } from "../../../button/Button"
import { LanguageToogle } from "../../../language_toogle/LanguageToogle"
import { Link } from "../../../link/Link"

export const Navbar = ({
  options,
  setSecondaryLanguage,
  buttonText,
  sectionToScroll,
  mail,
  withLanguageToggle,
}: NavbarProps) => {
  let optionsList = options.map(({ name, link, externalLink }: any) => (
    <li tabIndex={0} key={name} className={styles.dropdown_option}>
      <Link
        href={link}
        target={externalLink ? "_blank" : "_self"}
        rel={externalLink ? "external" : undefined}
      >
        {name}
      </Link>
    </li>
  ))
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <nav tabIndex={0} className={styles.container}>
      <menu className={styles.title} onClick={handleToggle}>
        {!toggleMenu ? (
          <span className={styles.inActive}></span>
        ) : (
          <span className={styles.active}>X</span>
        )}
        Menu
      </menu>
      {withLanguageToggle ? <LanguageToogle setSecondaryLanguage={setSecondaryLanguage} /> : null}
      {toggleMenu ? (
        <div className={styles.dropdown} onClick={handleToggle}>
          <ul>{options ? optionsList : null}</ul>

          <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />

          <a className={styles.contact} href={`mailto:${mail}`}>
            {mail}
          </a>
        </div>
      ) : null}
    </nav>
  )
}
