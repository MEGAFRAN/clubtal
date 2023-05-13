const title = "Clubtal Text Analysis App | AI-Powered Solution for Business Insights"
const description = `Discover Clubtal's AI-powered text analysis app, designed to provide 
  businesses with actionable insights on customer emotions and opinions. Automate processes, 
  reduce costs, and make data-driven decisions with our cutting-edge technology. Try it now!`
const url = "https://clubtal.com/burnout-quiz"
const name = "Clubtal"
const favicon = "/favicon.ico"
const themeColor = "#212121"

const BURNOUT_QUIZ_HEAD = (
  <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="viewport" content="height=device-height, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>{title}</title>
    <meta property="og:locale" content="en_CO" />
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
export default BURNOUT_QUIZ_HEAD
