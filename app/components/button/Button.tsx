import Link from "next/link"
import { ButtonProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/button.module.scss"

const Button = ({ text, handleClick, style = "regular", scrollToSection, linkTo }: ButtonProps) => {
  const scrollTo = (selector: string): void => {
    const section = document.querySelector(selector)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  let variant
  if (style === "cta") variant = styles.ctaButton
  if (style === "navbar") variant = styles.navbarButton
  else variant = styles.regularButton

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
