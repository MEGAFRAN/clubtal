import { Button } from '../../../button/Button'
import { Navbar } from '../navbar/Navbar'
import styles from '../../../../styles/components/header.module.scss'

export const Header = ({navbarOptions}: any) => {

    return (

        <header className={styles.container}>

            <Navbar options={navbarOptions} />

            <h1>Creamos lo que quieras en Crypto</h1>

            <p>
                Solucionamos todo lo que necesitas para la creacion o comercializacion de tus criptomonedas,
                proteje y valoriza lo que mas te importa.
            </p>

            <Button text="Mas informacion" style='cta'/>
            
        </header>
            
    )

}