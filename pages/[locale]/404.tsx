import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import ErrorCommonPages from "../../app/components/error_common_pages/ErrorCommonPages"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

const NotFound = () => {
  const router = useRouter()
  const { t } = useTranslation(["common"])
  // this code is when not found at endpoints in app
  const code = "404"
  return (
    <main style={{ display: "flex" }}>
      <ErrorCommonPages
        codeError={code}
        text={t("message-error-404")}
        buttonText={t("name-button-home")}
        styleButton="cta"
        scrollToSection=""
        handleClick={() => router.replace("/")}
      />
    </main>
  )
}

export default NotFound

const getStaticProps = makeStaticProps(["common"])
export { getStaticPaths, getStaticProps }
