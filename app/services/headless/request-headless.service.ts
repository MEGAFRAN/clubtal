import { REQUEST_WORDPRESS_GRAPH_QL } from "../api/variables"
import { handleError, handleResponse } from "../utils/reponse/response"

async function requestHeadlessData(
  query: string,
  variables?: Record<string, any>,
): Promise<Response> {
  return fetch(REQUEST_WORDPRESS_GRAPH_QL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default requestHeadlessData
