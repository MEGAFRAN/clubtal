import { GET_TEXT_ANALYSIS } from "../api/variables"
import { handleError, handleResponse } from "../utils/reponse/response"

async function getTextAnalysis(text: string, context: string): Promise<Response> {
  return fetch(GET_TEXT_ANALYSIS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, context }),
  })
    .then(handleResponse)
    .catch(handleError)
}

export default getTextAnalysis
