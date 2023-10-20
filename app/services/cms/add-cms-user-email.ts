import { ADD_CMS_USER_EMAIL } from "../api/variables"
import { handleResponse, handleError } from "../utils/reponse/response"

async function addCmsUserEmail(
  email: string,
): Promise<{ projectId: string; dataset: string; token: string; apiVersion: string } | string> {
  return fetch(ADD_CMS_USER_EMAIL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default addCmsUserEmail
