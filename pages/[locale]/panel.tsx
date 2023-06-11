import { NextPage } from "next"
import { useEffect, useState } from "react"
import useAuthToken from "../../app/hook/useAuthToken"
import getWebTokenEmail from "../../app/services/utils/authentication/token"
import requestHeadlessData from "../../app/services/headless/request-headless.service"
import addUser from "../../app/services/user/add/add-user.service"

async function getUser(token: string) {
  const webTokenEmail = getWebTokenEmail(token)
  const checkUserQuery = `
  {
    allUsers(email: "${webTokenEmail}") 
    {
      username
    }
  }`

  const response = await requestHeadlessData(checkUserQuery)
  const { data, errors } = await response.json()

  if (errors) {
    console.error(errors)
    return null
  }

  return data?.allUsers[0]?.username
}

async function addUserIfNotExists(token: string) {
  const webTokenEmail = getWebTokenEmail(token)
  await addUser(webTokenEmail)
  return getUser(token)
}

const Panel: NextPage = () => {
  const [userName, setUserName] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const token = useAuthToken()

  useEffect(() => {
    if (!token) {
      setIsLoading(false)
      return
    }

    getUser(token)
      .then((name) => {
        if (name) {
          return Promise.resolve(name)
        }
        return addUserIfNotExists(token)
      })
      .then((name) => {
        setUserName(name)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [token])

  if (isLoading) return <div>Autenticando credenciales</div>
  if (!token || !userName) return null

  return <div>Bienvenido {userName}.</div>
}

export default Panel
