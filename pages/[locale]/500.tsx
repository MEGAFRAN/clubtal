import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import ErrorCommonPages from "../../app/components/error_common_pages/ErrorCommonPages"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

const ServerError = () => {
  const router = useRouter()
  const { t } = useTranslation(["common"])
  // this code is when there is a server error
  const code = "500"
  return (
    <main style={{ display: "flex" }}>
      <ErrorCommonPages
        codeError={code}
        text={t("message-error-500")}
        buttonText={t("name-button-home")}
        styleButton="cta"
        scrollToSection=""
        handleClick={() => router.replace("/")}
      />
    </main>
  )
}

export default ServerError

const getStaticProps = makeStaticProps(["common"])
export { getStaticPaths, getStaticProps }
