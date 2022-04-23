import styles from '../../styles/components/language-toogle.module.scss'

export const LanguageToogle = ({setIsEnglishText}: any) => {

    return (
      
        <div className={styles.container}>

            <button onClick={()=> setIsEnglishText(false)}>

                Español

            </button>  
            <button onClick={()=> setIsEnglishText(true)}>

                English

            </button>  

        </div>

  )

}