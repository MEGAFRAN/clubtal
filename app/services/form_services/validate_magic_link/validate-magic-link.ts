import { VALIDATE_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/response"

export async function validateMagicLink(token: any): Promise<Response> {
  return await fetch(`${VALIDATE_MAGIC_LINK}?token=${token}`)
    .then(handleResponse)
    .catch(handleError)
}
