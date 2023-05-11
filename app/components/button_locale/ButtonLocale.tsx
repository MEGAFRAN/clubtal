import { ButtonLocaleProps } from "../../constants/types/components_props/types"
import SwitchLanguage from "../switch_language/SwitchLanguage"

function ButtonLocale({ currentLocale }: ButtonLocaleProps) {
  const locales = ["en", "es"]
  return (
    <>
      {locales.map((locale) => {
        if (locale === currentLocale) return null
        return <SwitchLanguage locale={locale} key={locale} />
      })}
    </>
  )
}

export default ButtonLocale
