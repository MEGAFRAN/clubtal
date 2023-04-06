import { createContext } from "react"
import { LanguageContextValue } from "../../constants/types/components_props/types"

const languageContext = createContext<LanguageContextValue | undefined>(undefined)

export default languageContext
