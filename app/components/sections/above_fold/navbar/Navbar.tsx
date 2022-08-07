import styles from '../../../../styles/components/navbar.module.scss'
import { Button } from '../../../button/Button'
import { LanguageToogle } from '../../../language_toogle/LanguageToogle'

export const Navbar = ({ options, setSecondaryLanguage, buttonText }: any) => {

    let optionsList = options.map(({ name, link }: any) => (

        <li tabIndex={0} key={name} className={styles.dropdown_option}>

            <a href={link}>{name}</a>

        </li>
    ))


    return (

        <nav tabIndex={0} className={styles.container}>

            <span className={styles.title}>Menu</span> 

            <LanguageToogle setSecondaryLanguage={setSecondaryLanguage}/>

            <div className={styles.dropdown}>

                <ul>

                    {options ? optionsList : null}
                    
                </ul>

                <Button text={buttonText} style='cta' scrollToSection={'#contact'}/>

                <a className={styles.contact} href="mailto:info@clubtal.com">info@clubtal.com</a>
                
            </div>
            
        </nav>
   
    )

}