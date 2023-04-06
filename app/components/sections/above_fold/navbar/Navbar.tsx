import { useState } from "react"
import { NavbarProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/components/navbar.module.scss"
import Button from "../../../button/Button"
import LanguageToogle from "../../../language_toogle/LanguageToogle"
import Link from "../../../link/Link"

const Navbar = ({
  options,
  buttonText,
  sectionToScroll,
  mail,
  withToogleMenu,
  withLanguageToggle,
  withLoginButton,
}: NavbarProps) => {
  const optionsList =
    options &&
    options.map(({ name, link, externalLink }: any) => (
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
    if (withToogleMenu) {
      setToggleMenu(!toggleMenu)
    }
  }
  return (
    <nav tabIndex={0} className={styles.container} aria-label="Main Navigation">
      <button className={styles.title} onClick={handleToggle}>
        {!toggleMenu ? (
          <span className={styles.inActive}></span>
        ) : (
          <span className={styles.active}>X</span>
        )}
      </button>
      {withLanguageToggle && <LanguageToogle />}
      {withLoginButton && (
        <Button aria-label="Call to Action" text="Registro / Login" style="cta" linkTo="/login" />
      )}
      {toggleMenu ? (
        <div className={styles.dropdown} onClick={handleToggle}>
          <ul aria-label="Navigation Links">{options ? optionsList : null}</ul>

          <Button
            aria-label="Call to Action"
            text={buttonText}
            style="cta"
            scrollToSection={sectionToScroll}
          />

          <a aria-label="Contact Email" className={styles.contact} href={`mailto:${mail}`}>
            {mail}
          </a>
        </div>
      ) : null}
    </nav>
  )
}
export default Navbar
