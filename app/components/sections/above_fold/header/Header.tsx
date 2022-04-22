import { Button } from '../../../button/Button'
import { Navbar } from '../navbar/Navbar'
import styles from '../../../../styles/sections/header.module.scss'

export const Header = ({navbarOptions, setIsEnglishText, title, text, buttonText}: any) => {

    return (

        <header className={styles.container}>

            <Navbar options={navbarOptions} setIsEnglishText={setIsEnglishText}/>

            <h1>{title[0]} <em>{title[1]}</em> {title[2]}</h1>

            <p>
                {text[0]},<em> {text[1]}</em>
            </p>

            <div className={styles.cta_wrapper}>
                <img src='/images/crown.svg' alt="crown" />
                <Button text={buttonText[0]} style='cta' />
            </div>
            
        </header>
            
    )

}