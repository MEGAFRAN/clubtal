import { SectionTitleListProps } from "../../../constants/types/components_props/types"
import { List } from "../../list/List"

export const SectionTitleList = ({ title, description, id }: SectionTitleListProps) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <List listData={description} />
    </section>
  )
}
