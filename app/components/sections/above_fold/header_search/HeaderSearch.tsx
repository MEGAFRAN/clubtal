import { HeaderSearchProps } from "../../../../constants/types/components_props/types"
import styles from "../../../../styles/sections/header.module.scss"
import Search from "../../../search/Search"
import Navbar from "../navbar/Navbar"

const HeaderSearch = ({ title, text, buttonText, categories }: HeaderSearchProps) => (
  <header className={styles.container}>
    <Navbar buttonText={buttonText} withHomeButton={true} />
    {title && <h1>{title}</h1>}
    {text && <p>{text}</p>}
    <Search options={categories} />
  </header>
)
export default HeaderSearch
