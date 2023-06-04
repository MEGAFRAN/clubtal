import { NextPage } from "next"
import useAuthToken from "../../app/hook/useAuthToken"

const Panel: NextPage = () => {
  const token = useAuthToken()
  if (!token) return null

  return <div>hola estas autenticado</div>
}
export default Panel
