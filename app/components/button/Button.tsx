import styles from '../../styles/components/button.module.scss'

export const Button = ({ text= "default text", handleClick, style='regular'}: any) => {

  let variant = style === 'cta' ? styles.ctaButton : styles.regularButton

  return (

    <button className={variant} onClick={handleClick}>

      {text}

    </button>  

  )

}