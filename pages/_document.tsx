import Document, { Html, Head, Main, NextScript } from "next/document"
import i18nextConfig from "../next-i18next.config"

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
    const lang: string | undefined = Array.isArray(currentLocale) ? undefined : currentLocale;
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
