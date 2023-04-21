import { SectionTitleListProps } from "../../../constants/types/components_props/types"
import List from "../../list/List"

const SectionTitleList = ({ title, description, id }: SectionTitleListProps) => (
  <section id={id}>
    <h2>{title}</h2>
    <List listData={description} />
  </section>
)
export default SectionTitleList
