import { useState, useRef, useEffect, FormEvent } from "react"
import styles from "../../styles/components/chat.module.scss"

interface ChatProps {
  onMinimize: () => void
}

interface Message {
  role: "system" | "user" | "assistant"
  content: string
}

export const ChatComponent: React.FC<ChatProps> = ({ onMinimize }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content: "Hola! Preguntame lo que quieras",
    },
  ])
  const [userMessage, setUserMessage] = useState("")
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!userMessage.trim()) return

    const newUserMessage: Message = { role: "user", content: userMessage }
    setMessages((prevMessages) => [...prevMessages, newUserMessage])

    try {
      const response = await fetch("https://post-push.azurewebsites.net/api/ChatBotService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, newUserMessage] }),
      })

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

    setUserMessage("")
  }

  return (
    <div className={styles.container}>
      <button className={styles.minimize_button} onClick={onMinimize}>
        &#8722;
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
          placeholder="Type your message..."
          aria-label="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
