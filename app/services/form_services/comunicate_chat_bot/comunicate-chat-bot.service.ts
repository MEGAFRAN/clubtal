import { ChatbotMessage } from "../../../constants/types/components_props/types"
import { COMUNICATE_CHAT_BOT } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function comunicateChatBot(
  initialHiddenContextMessage: { role: string; content: string },
  messages: ChatbotMessage[],
  userMessage: string,
): Promise<Response> {
  return fetch(COMUNICATE_CHAT_BOT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [initialHiddenContextMessage, ...messages, { role: "user", content: userMessage }],
    }),
  })
    .then(handleResponse)
    .catch(handleError)
}

export default comunicateChatBot
