import styles from "../../styles/components/list.module.scss"

export const List = ({ listData }: any) => {
  let listItems = listData.map((listItem: any, index: number) => (
    <li key={index}>{listItem}</li>
  ))

  return <ul className={styles.container}>{listData ? listItems : null}</ul>
}
