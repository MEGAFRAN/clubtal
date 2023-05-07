import { useState, useRef, useEffect, FormEvent } from "react"
import { ChatbotMessage, ChatbotProps } from "../../constants/types/components_props/types"
import comunicateChatBot from "../../services/form_services/comunicate_chat_bot/comunicate-chat-bot.service"
import { getPageText, initialContext } from "../../services/utils/general/chatbot/chatbot"
import styles from "../../styles/components/chat.module.scss"

const ChatBot = ({
  onClose,
  initialMessage,
  inputPlaceholderText,
  sendButtonText,
}: ChatbotProps) => {
  const [messages, setMessages] = useState<ChatbotMessage[]>([
    {
      role: "assistant",
      content: initialMessage,
    },
  ])
  const [userMessage, setUserMessage] = useState("")
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const initialHiddenContextMessage = {
    role: "user",
    content: `${initialContext} """${getPageText()}"""`,
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!userMessage.trim()) return

    const newUserMessage: ChatbotMessage = { role: "user", content: userMessage }
    setMessages((prevMessages) => [...prevMessages, newUserMessage])
    setUserMessage("")

    try {
      const response = await comunicateChatBot(initialHiddenContextMessage, messages, userMessage)

      if (response.status === 200) {
        const data = await response.json()
        const assistantResponse = data.content

        if (assistantResponse && typeof assistantResponse === "string") {
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "assistant", content: assistantResponse },
          ])
        }
      } else {
        console.error("Error:", response.statusText)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className={styles.container} data-testid="chatbot-container">
      <button className={styles.close_button} onClick={onClose}>
        &#x2715;
      </button>
      <div className={styles.chat_messages} ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.role]}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder={inputPlaceholderText}
          aria-label={inputPlaceholderText}
        />
        <button type="submit">{sendButtonText}</button>
      </form>
    </div>
  )
}
export default ChatBot
