import styles from '../../../styles/sections/use-cases.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'

export const UseCases = ({listData}: any) => {

    return (

        <section className={styles.container}>

           
            <h2>¿Que podras hacer con tu crypto / token?</h2>
            <img src='/images/characters/character-question.jpg' alt="character with a question" loading='lazy' />
            <List listData={listData} />
            <Button text="Contactanos aqui" style='cta' />

        </section>
            
    )

}