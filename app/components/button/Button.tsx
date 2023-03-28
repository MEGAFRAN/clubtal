import { ButtonProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/button.module.scss"
import Link from "../link/Link"

const Button = ({ text, handleClick, style = "regular", scrollToSection, linkTo }: ButtonProps) => {
  const scrollTo = (selector: string): void => {
    const section = document.querySelector(selector)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const variant = style === "cta" ? styles.ctaButton : styles.regularButton

  let button
  if (scrollToSection) {
    button = (
      <button className={variant} onClick={() => scrollTo(scrollToSection)}>
        {text}
      </button>
    )
  } else if (linkTo) {
    button = (
      <Link href={linkTo}>
        <button className={variant}>{text}</button>
      </Link>
    )
  } else {
    button = (
      <button className={variant} onClick={handleClick}>
        {text}
      </button>
    )
  }

  return button
}

export default Button
