import styles from '../../../styles/sections/supported-by.module.scss'
import { List } from '../../list/List'

export const SupportedBy = ({listData}: any) => {

    return (

        <section className={styles.container}>

            <h2>Respaldado por la Red SOLANA</h2>
            <List listData={listData}/>

        </section>
            
    )

}