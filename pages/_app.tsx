import type { AppProps } from 'next/app'
import '../../crypto-crea/app/styles/base/reset.scss'
import '../../crypto-crea/app/styles/base/base.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
