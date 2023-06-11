import { ADD_USER } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function addUser(email: string): Promise<Response> {
  return fetch(ADD_USER, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default addUser
