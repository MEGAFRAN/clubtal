import { VALIDATE_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function validateMagicLink(token: any): Promise<Response> {
  return fetch(`${VALIDATE_MAGIC_LINK}?token=${token}`).then(handleResponse).catch(handleError)
}
export default validateMagicLink
