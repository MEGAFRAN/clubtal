import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { MagicLinkResponse } from "../../constants/types/components_props/types"
import certifyMagicLink from "../../services/form_services/certify_magic_link/certify-magic-link"

const MagicLink = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [effectHasRun, setEffectHasRun] = useState(false)

  useEffect(() => {
    const { token } = router.query

    if (!token) {
      router.push("/")
      return
    }

    if (!effectHasRun && token) {
      setEffectHasRun(true)

      certifyMagicLink(token)
        .then((response: Response) => response.json() as Promise<MagicLinkResponse>)
        .then((data: MagicLinkResponse) => {
          if (data.token) {
            localStorage.setItem("clubtal_token", data.token)
            router.push("/panel")
          } else {
            setError(true)
          }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }
  }, [router.query.token, effectHasRun])

  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (error) {
    return <h1>Validacion de magic link fallo</h1>
  }

  return <h1>Validandacion exitosa...</h1>
}
export default MagicLink
