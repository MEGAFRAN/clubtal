import styles from '../../styles/components/button.module.scss'

export const Button = ({ text = "default text", handleClick, style = 'regular', scrollToSection}: any) => {
  
  const scrollTo = (selector: string): void =>
  {
    const section = document.querySelector( selector )
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } )
  }

  let variant = style === 'cta' ? styles.ctaButton : styles.regularButton

  let button = scrollToSection ? <button className={variant} onClick={()=> scrollTo(scrollToSection)}> {text} </button>
                               : <button className={variant} onClick={handleClick}> {text} </button>

  return (

    button

  )

}