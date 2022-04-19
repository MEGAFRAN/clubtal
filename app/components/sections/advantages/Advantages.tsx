import styles from '../../../styles/sections/advantages.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const Advantages = ({listData}: any) => {

    return (

        <section className={styles.container}>

            <h2>Ventajas de la tecnologia blockchain</h2>
            <img src='/images/characters/character-check.jpg' alt="character with a checkmark" loading='lazy' />
            <List listData={listData} />
            <Button text="Contactanos aqui" style='cta' />

        </section>
            
    )

}