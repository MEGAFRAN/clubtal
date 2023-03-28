import { ListProps } from "../../constants/types/components_props/types"
import styles from "../../styles/components/list.module.scss"

const List = ({ listData }: ListProps) => {
  const listItems = listData.map((listItem: any, index: number) => <li key={index}>{listItem}</li>)

  return <ul className={styles.container}>{listData ? listItems : null}</ul>
}
export default List
