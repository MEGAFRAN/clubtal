import { Button } from '../../../button/Button'
import { Navbar } from '../navbar/Navbar'
import styles from '../../../../styles/sections/header.module.scss'

export const Header = ({navbarOptions}: any) => {

    return (

        <header className={styles.container}>

            <Navbar options={navbarOptions} />

            <h1>Creamos <em>lo que quieras</em> en Crypto</h1>

            <p>
                Creamos criptomonedas y tokens para ti,<em> proteje y valoriza lo que quieras.</em>
            </p>

            <div className={styles.cta_wrapper}>
                <img src='/images/crown.svg' alt="crown" />
                <Button text="Mas informacion" style='cta' />
            </div>
            
        </header>
            
    )

}