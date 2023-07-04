import { pageHeadProps } from "../../constants/types/components_props/types"

const PageHead = ({
  description,
  title,
  locale,
  url,
  favicon = "/favicon.ico",
  name = "Pediagenda",
  themeColor = "#212121",
}: pageHeadProps) => (
  <>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>{title}</title>
    <meta property="og:locale" content={locale} />
    <meta property="og:type" content="WebPage" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={favicon} />
    <meta property="og:site_name" content={name} />
    <meta property="og:url" content={url} />
    <link rel="canonical" href={url} />
    <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
    <link rel="icon" type="image/png" href={favicon} sizes="96x96" />
    <link rel="apple-touch-icon" href={favicon} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content={themeColor} />
  </>
)

export default PageHead
