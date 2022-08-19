import styles from "../../../../styles/components/navbar.module.scss"
import { Button } from "../../../button/Button"
import { LanguageToogle } from "../../../language_toogle/LanguageToogle"
import { Link } from "../../../link/Link"

export const Navbar = ({
  options,
  setSecondaryLanguage,
  buttonText,
  sectionToScroll,
  mail = "info@clubtal.com",
}: any) => {
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

  return (
    <nav tabIndex={0} className={styles.container}>
      <span className={styles.title}>Menu</span>

      <LanguageToogle setSecondaryLanguage={setSecondaryLanguage} />

      <div className={styles.dropdown}>
        <ul>{options ? optionsList : null}</ul>

        <Button text={buttonText} style="cta" scrollToSection={sectionToScroll} />

        <a className={styles.contact} href={`mailto:${mail}`}>
          {mail}
        </a>
      </div>
    </nav>
  )
}
