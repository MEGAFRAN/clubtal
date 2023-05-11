import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import Error404 from "../../app/components/error404/Error404"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

const NotFound = () => {
  const router = useRouter()
  const { t } = useTranslation(["common"])
  return (
    <main style={{ display: "flex" }}>
      <Error404
        text={t("message-error-404")}
        buttonTextEnglish={t("name-button-404-en")}
        buttonTextSpanish={t("name-button-404-es")}
        styleButton="cta"
        scrollToSection=""
        handleClickEnglish={() => router.replace("/")}
        handleClickSpanish={() => router.replace("/es")}
      />
    </main>
  )
}

export default NotFound

const getStaticProps = makeStaticProps(["common"])
export { getStaticPaths, getStaticProps }
