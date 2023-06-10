import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null)
  const { push } = useRouter()

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("clubtal_token")
    if (!tokenFromLocalStorage) {
      push("/")
    }
    setToken(tokenFromLocalStorage)
  }, [push])

  return token
}

export default useAuthToken
