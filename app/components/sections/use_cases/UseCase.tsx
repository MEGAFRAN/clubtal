import styles from '../../../styles/sections/use-cases.module.scss'
import { List } from '../../list/List'

export const UseCases = ({listData}: any) => {

    return (

        <section className={styles.container}>

            <h2>¿Que podras hacer con tu crypto / token?</h2>
            <List listData={listData}/>

        </section>
            
    )

}