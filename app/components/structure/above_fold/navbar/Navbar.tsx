import styles from '../../../../styles/components/navbar.module.scss'

export const Navbar = ({ options, dropdownTitle }: any) => {

    let optionsList = options.map(({ name, link }: any) => (

        <li tabIndex={0} key={name} className={styles.dropdown_option}>

            <a href={link}>{name}</a>
            
        </li>
    ))

    return (

        <nav tabIndex={0} className={styles.container}>

            <span className={styles.title}>{dropdownTitle ? dropdownTitle : 'CryptoCrea'}</span> 

            <ul className={styles.dropdown}>

                {options ? optionsList : null}
                
            </ul>

        </nav>
            
    )

}