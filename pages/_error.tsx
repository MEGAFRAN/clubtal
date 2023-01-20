import { NextPage } from "next"
import { ErrorPageProps } from "../app/constants/types/components_props/types"
import NotFound from "./404"

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, message }) => {
  if (statusCode === 404) {
    return <NotFound />
  } else {
    return null
  }
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
