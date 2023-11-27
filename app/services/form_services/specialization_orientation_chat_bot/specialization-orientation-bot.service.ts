import { SPECIALIZATION_ORIENTATION_CHAT_BOT } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function specializationOrientationChatBot(userMessage: string): Promise<Response> {
  return fetch(SPECIALIZATION_ORIENTATION_CHAT_BOT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: userMessage,
    }),
  })
    .then(handleResponse)
    .catch(handleError)
}

export default specializationOrientationChatBot
