import { CREATE_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function createMagicLink(email: string): Promise<Response> {
  return fetch(CREATE_MAGIC_LINK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default createMagicLink
