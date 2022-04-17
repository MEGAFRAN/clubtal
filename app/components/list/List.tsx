import styles from '../../styles/components/list.module.scss'

export const List = ({ listData }: any) => {

  let listItems =  listData.map((listItem:any) => (<li>{listItem}</li>) )  

  return (

    <ul className={styles.container}>

      {listData ? listItems : null}

    </ul>  

  )

}