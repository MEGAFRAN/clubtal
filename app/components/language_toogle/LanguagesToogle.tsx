import { useRouter } from "next/router"


export default function LanguagesToogle() {
    const router = useRouter()
    const { locales, locale } = router
    console.log(locale)
    return (
        <>
      {locales?.map((loc) => (
        <form
          action="/api/language"
          method="POST"
          key={loc}
          className="inline-block"
        >
          <input name="preferredLocale" value={loc} type="hidden"></input>
          <button
            type="submit"
          >
            {loc}
          </button>
        </form>
      ))}
    </>
    )
}