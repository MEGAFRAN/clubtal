import { GENERATE_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function generateMagicLink(email: string): Promise<Response> {
  return fetch(GENERATE_MAGIC_LINK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default generateMagicLink
