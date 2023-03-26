import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

export const MagicLinkComponent = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [effectHasRun, setEffectHasRun] = useState(false)

  useEffect(() => {
    // Get the token from the URL query parameters
    const { token } = router.query

    if (!effectHasRun && token) {
      // Mark the effect as having run
      setEffectHasRun(true)

      // Make an HTTP GET request to the Azure Function URL
      fetch(`https://clubtal-web-services.azurewebsites.net/api/validate-magic-link?token=${token}`)
        .then((response) => {
          if (response.ok) {
            // Redirect the user to the website's home page
            router.push("/semillero-analitica-web")
          } else {
            setError(true)
          }
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
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
