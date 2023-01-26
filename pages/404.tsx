import { useRouter } from "next/router"
import { Error404 } from "../app/components/error404/Error404"

const NotFound = () => {
  const router = useRouter()
  const text = ""
  return (
    <main style={{ display: "flex" }}>
      <Error404
        text="No encontramos la dirección que buscabas, si quieres más información te invitamos a nuestra página principal"
        buttonText="Ir a página principal"
        styleButton="cta"
        scrollToSection=""
        handleClick={() => router.replace("/")}
      />
    </main>
  )
}

export default NotFound
