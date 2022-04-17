import type { AppProps } from 'next/app'
import '../../cryptocrea/app/styles/base/reset.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
