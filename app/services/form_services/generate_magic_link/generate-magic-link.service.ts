import { GENERATE_MAGIC_LINK } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/response"

export async function generateMagicLink(email: string): Promise<Response> {
  return await fetch(GENERATE_MAGIC_LINK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(handleResponse)
    .catch(handleError)
}
