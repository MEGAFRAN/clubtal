import styles from '../../../styles/sections/following-steps.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const FollowingSteps = ({listData}: any) => {

    return (

        <section className={styles.container}>

            <h2>Pasos a seguir</h2>
            <List listData={listData} />
            <Button text="Iniciemos el proceso" style='cta' />

        </section>
            
    )

}