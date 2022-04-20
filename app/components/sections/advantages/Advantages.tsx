import styles from '../../../styles/sections/advantages.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const Advantages = ({listData}: any) => {

    return (

        <section className={styles.container}>

            <h2>Ventajas de la tecnologia blockchain</h2>
            <List listData={listData} />
            <Button text="Asesoria gratis" style='cta' />

        </section>
            
    )

}