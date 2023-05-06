import nextI18nextConfig from "../../../next-i18next.config"
import { ButtonLocaleProps } from "../../constants/types/components_props/types"
import SwitchLanguage from "../switch_language/SwitchLanguage"

function ButtonLocale({ currentLocale }: ButtonLocaleProps) {

    return (
        <>
            {nextI18nextConfig.i18n.locales.map((locale) => {
                if (locale === currentLocale) return null
                return <SwitchLanguage locale={locale} key={locale} />
            })}

        </>
    )
}

export default ButtonLocale