import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "../app/styles/base/reset.scss"
import "../app/styles/base/base.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
