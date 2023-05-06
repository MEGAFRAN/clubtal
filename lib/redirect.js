import { useEffect } from "react"
import { useRouter } from "next/router"
import languageDetector from "./languageDetector"

export const useRedirect = (to) => {
  const router = useRouter()
  to = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLanguage = languageDetector.detect()
    if (to.startsWith(`/${detectedLanguage}`) && router.route === "/404") {
      // prevent endless loop
      router.replace(`/${detectedLanguage}${router.route}`)
      return
    }

    languageDetector.cache(detectedLanguage)
    router.replace(`/${detectedLanguage}${to}`)
  })

  return <></>
}

export const Redirect = () => {
  useRedirect()
  return <></>
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to)
  return <></>
}
