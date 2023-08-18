import { useState } from "react"
import { useRouter } from "next/router"
import { NavbarProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/components/navbar.module.scss"
import Button from "../../../button/Button"
import Link from "../../../link/Link"

const Navbar = ({
  options,
  buttonText,
  sectionToScroll,
  mail,
  withToogleMenu,
  withLoginButton,
  withContactButton,
  withHomeButton,
}: NavbarProps) => {
  const router = useRouter()
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
  const [buttonHome, ButtonContact] = buttonText || []
  const handleToggle = () => {
    if (withToogleMenu) {
      setToggleMenu(!toggleMenu)
    }
  }
  return (
    <nav tabIndex={0} className={styles.container} aria-label="Main Navigation">
      {withHomeButton && (
        <Button aria-label="Call to Action" text={buttonHome} style="navbar" linkTo={"/"} />
      )}
      {withContactButton && (
        <Button
          aria-label="Call to Action"
          text={ButtonContact}
          style="navbar"
          scrollToSection={sectionToScroll}
        />
      )}
      {withLoginButton && (
        <Button
          aria-label="Call to Action"
          text="Registro / Login"
          style="cta"
          linkTo="/register"
        />
      )}
      {toggleMenu ? (
        <div className={styles.dropdown} onClick={handleToggle}>
          <ul aria-label="Navigation Links">{options ? optionsList : null}</ul>

          <Button
            aria-label="Call to Action"
            text={ButtonContact}
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
