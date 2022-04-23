import styles from '../../../../styles/components/navbar.module.scss'
import { Button } from '../../../button/Button'
import { LanguageToogle } from '../../../language_toogle/LanguageToogle'
import Link from 'next/link'

export const Navbar = ({ options, setIsEnglishText, buttonText }: any) => {

    let optionsList = options.map(({ name, link }: any) => (

        <li tabIndex={0} key={name} className={styles.dropdown_option}>

            <Link href={link}>
                <a>{name}</a>
            </Link>
            
        </li>
    ))


    return (

        <nav tabIndex={0} className={styles.container}>

            <span className={styles.title}>Menu</span> 

            <LanguageToogle setIsEnglishText={setIsEnglishText}/>

            <div className={styles.dropdown}>

                <ul>

                    {options ? optionsList : null}
                    
                </ul>

                <Button text={buttonText} style='cta' />

                <a className={styles.contact} href="mailto:info@cryptocrea.co">info@cryptocrea.co</a>
                
            </div>
            
        </nav>
   
    )

}