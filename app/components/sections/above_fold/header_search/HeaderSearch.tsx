import { HeaderSearchProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/sections/header.module.scss"
import Breadcrumb from "../../../breadcrumb/Breadcrumb"
import CategoryLinks from "../../../category_links/CategoryLinks"
import Search from "../../../search/Search"

const HeaderSearch = ({ title, text, categories }: HeaderSearchProps) => (
  <header className={styles.container}>
    <Breadcrumb />
    {title && <h1>{title}</h1>}
    {text && <p>{text}</p>}
    <Search options={categories} />
    <CategoryLinks categories={categories} />
  </header>
)
export default HeaderSearch
