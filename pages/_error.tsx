import { NextPage } from "next"
import { ErrorPageProps } from "../app/constants/types/components_props/types"
import NotFound from "./[locale]/404"
import ServerError from "./[locale]/500"

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  if (statusCode === 404) {
    return <NotFound />
  }
  if (statusCode === 500) {
    return <ServerError />
  }
  return null
}

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode
  if (res) statusCode = res.statusCode
  if (err) statusCode = err.statusCode
  else statusCode = 404
  return { statusCode }
}

export default ErrorPage
