import { CREATE_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function createMagicLink(email: string, pageOrigin = window.location.origin, pageLanguage = document.documentElement.lang): Promise<Response> {
  return fetch(CREATE_MAGIC_LINK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, pageOrigin, pageLanguage }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default createMagicLink
