import { GET_SENTIMENT_ANALYSIS } from "../api/variables"
import { handleError, handleResponse } from "../utils/reponse/response"

async function getSentimentAnalysis(text: string): Promise<Response> {
  return fetch(GET_SENTIMENT_ANALYSIS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  })
    .then(handleResponse)
    .catch(handleError)
}

export default getSentimentAnalysis
