import { useRouter } from "next/router"
import Error404 from "../app/components/error404/Error404"

const NotFound = () => {
  const router = useRouter()
  return (
    <main style={{ display: "flex" }}>
      <Error404
        text={"hi"}
        buttonTextEnglish={"hi"}
        buttonTextSpanish={"hi"}
        styleButton="cta"
        scrollToSection=""
        handleClickEnglish={() => router.replace("/")}
        handleClickSpanish={() => router.replace("/es")}
      />
    </main>
  )
}

export default NotFound
