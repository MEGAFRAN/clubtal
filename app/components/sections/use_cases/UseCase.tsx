import styles from '../../../styles/sections/use-cases.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const UseCases = ({listData, title, buttonText}: any) => {

    return (

        <section className={styles.container}>

           
            <h2>{title}</h2>
            <List listData={listData} />
            <Button text={buttonText} style='cta' />

        </section>
            
    )

}