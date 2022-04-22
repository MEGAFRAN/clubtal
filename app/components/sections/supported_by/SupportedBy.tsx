import styles from '../../../styles/sections/supported-by.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'
import { useRouter } from 'next/router'

export const SupportedBy = ({listData, title, buttonText}: any) => {

    const router = useRouter()
    const solanaImage = router.pathname === 'https://megafran.github.io/crypto-crea/' 
                                        ? '/crypto-crea/images/solanaVerticalLogo.svg' 
                                        : '/images/solanaVerticalLogo.svg'

    return (

        <section className={styles.container}>

            <h2>{title}</h2>
            <img src={solanaImage} alt="solana logo" loading='lazy' />
            <List listData={listData} />
            <Button text={buttonText} style='cta' />

        </section>
            
    )

}