import styles from '../../../../styles/components/navbar.module.scss'
import { Navbar } from '../navbar/Navbar'

export const Header = ({navbarOptions}: any) => {



    return (

        <header>

            <Navbar options={navbarOptions} />

            <h1>Creamos lo que quieras en Crypto</h1>

            <p>
                Solucionamos todo lo que necesitas para la creacion o comercializacion de tus criptomonedas,
                proteje y valoriza lo que mas te importa.
            </p>
            
        </header>
            
    )

}