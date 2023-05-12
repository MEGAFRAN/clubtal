import { useRouter } from "next/router"
import Error404 from "../app/components/error404/Error404"
import common from "../public/locales/en/common.json"

const NotFound = () => {
  const router = useRouter()
  const translation = common
  return (
    <main style={{ display: "flex" }}>
      <Error404
        text={translation["message-error-404"]}
        buttonTextEnglish={translation["name-button-404-en"]}
        buttonTextSpanish={translation["name-button-404-es"]}
        styleButton="cta"
        scrollToSection=""
        handleClickEnglish={() => router.replace("/")}
        handleClickSpanish={() => router.replace("/es")}
      />
    </main>
  )
}

export default NotFound
