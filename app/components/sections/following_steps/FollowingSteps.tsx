import styles from '../../../styles/sections/following-steps.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const FollowingSteps = ({listData, title, buttonText}: any) => {

    return (

        <section id='following-steps' className={styles.container}>

            <h2>{title}</h2>
            <List listData={listData} />
            <Button text={buttonText} style='cta' scrollToSection={'#contact'}/>

        </section>
            
    )

}