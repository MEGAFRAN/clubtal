import { SEND_FEEDBACK_EMAIL } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function sendFeedbackMessage(
  formMessage: string,
  isPositiveFeedback?: boolean,
): Promise<Response> {
  return fetch(SEND_FEEDBACK_EMAIL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formMessage, isPositiveFeedback }),
  })
    .then(handleResponse)
    .catch(handleError)
}
export default sendFeedbackMessage
