import { ListProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/list.module.scss"

const List = ({ listData }: ListProps) => {
  const isValidListData = Array.isArray(listData) && listData.length
  const listItems = isValidListData
    ? listData.map((listItem: any, index: number) => <li key={index}>{listItem}</li>)
    : null

  return isValidListData ? <ul className={styles.container}>{listItems}</ul> : null
}
export default List
