const title = "Recorta tus gastos con inteligencia artificial - Clubtal",
  description = `¿Estás buscando formas de mejorar la eficiencia de tu negocio y reducir tus costos operativos? 
  ¡Tenemos la solución perfecta para ti! Nuestra empresa ofrece una amplia gama de productos de inteligencia artificial, 
  como asistentes virtuales y herramientas de automatización, diseñados para ayudarte a tomar decisiones más inteligentes y 
  eficientes en tu negocio. Con nuestras soluciones, puedes liberar tiempo valioso y recursos para centrarte en lo que realmente importa: 
  hacer crecer tu empresa. ¿Estás listo para aumentar la productividad y reducir los costos de manera significativa? 
  ¡Únete a nosotros hoy y comienza a transformar tu negocio!`,
  url = "https://clubtal.com/",
  name = "Clubtal",
  favicon = "/favicon.ico",
  themeColor = "#212121"

export const HOME_HEAD = (
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
