import type { AppProps } from 'next/app'
import '../../flex/app/styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
