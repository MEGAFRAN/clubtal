import styles from '../../../styles/sections/supported-by.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const SupportedBy = ({listData}: any) => {

    return (

        <section className={styles.container}>

            <h2>Respaldados por la Red</h2>
            <img src='/images/solanaVerticalLogo.svg' alt="solana logo" loading='lazy' />
            <List listData={listData} />
            <Button text="Contactanos aqui" style='cta' />

        </section>
            
    )

}