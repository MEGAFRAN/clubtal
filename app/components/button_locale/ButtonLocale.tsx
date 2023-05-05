import nextI18nextConfig from "../../../next-i18next.config"
import LanguagesToogle from "../language_toogle/LanguagesToogle"

interface ButtonLocaleProps {
    currentLocale: string | string[]
}
export default function ButtonLocale({ currentLocale }: ButtonLocaleProps) {

    return (
        <>
            {nextI18nextConfig.i18n.locales.map((locale) => {
                if (locale === currentLocale) return null
                return <LanguagesToogle locale={locale} key={locale} />
            })}

        </>
    )
}