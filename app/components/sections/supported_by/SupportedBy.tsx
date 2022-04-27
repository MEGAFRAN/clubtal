import styles from '../../../styles/sections/supported-by.module.scss'
import { Button } from '../../button/Button'
import { List } from '../../list/List'
import { useRouter } from 'next/router'

export const SupportedBy = ({listData, title, buttonText}: any) => {

    const router = useRouter()
    const GITHUB_PAGES_PATH = '/crypto-crea'
    const solanaImage = router.basePath === GITHUB_PAGES_PATH 
                                            ? '/crypto-crea/images/solanaVerticalLogo.svg' 
                                            : '/images/solanaVerticalLogo.svg'

    return (

        <section className={styles.container}>

            <h2>{title}</h2>
            <img src={solanaImage} alt="solana logo" loading='lazy' />
            <List listData={listData} />
            <Button text={buttonText} style='cta' scrollToSection={'#contact'}/>

        </section>
            
    )

}