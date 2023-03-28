import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import validateMagicLink from "../../services/form_services/validate_magic_link/validate-magic-link"

export const MagicLink = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [effectHasRun, setEffectHasRun] = useState(false)

  useEffect(() => {
    // Get the token from the URL query parameters
    const { token } = router.query

    if (!effectHasRun && token) {
      setEffectHasRun(true)

      validateMagicLink(token)
        .then((response) => {
          if (response.ok) router.push("/chatbot")
          else setError(true)
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
