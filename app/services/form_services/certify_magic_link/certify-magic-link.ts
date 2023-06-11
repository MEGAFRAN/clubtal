import { CERTIFY_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function certifyMagicLink(token: string | string[]): Promise<Response> {
  return fetch(`${CERTIFY_MAGIC_LINK}?token=${token}`).then(handleResponse).catch(handleError)
}
export default certifyMagicLink
