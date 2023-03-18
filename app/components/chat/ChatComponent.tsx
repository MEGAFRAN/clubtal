import { useState, useRef, useEffect, FormEvent } from "react"

interface ChatProps {}

interface Message {
  role: "system" | "user" | "assistant"
  content: string
}

const ChatComponent: React.FC<ChatProps> = () => {
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
    <div className="chat-container">
      <div className="chat-messages" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}`}>
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

      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          max-height: 600px;
          max-width: 500px;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 16px;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
        }

        .chat-message {
          margin-bottom: 8px;
          line-height: 1.4;
          word-wrap: break-word;
          color: red;
        }

        .chat-message.user {
          color: #0066cc;
          font-weight: bold;
        }

        .chat-message.assistant {
          color: #777;
        }

        form {
          display: flex;
          align-items: center;
          margin-top: 8px;
        }

        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          outline: none;
        }

        input:focus {
          border-color: #66afe9;
        }

        button {
          margin-left: 8px;
          padding: 8px 16px;
          background-color: #0066cc;
          color: #fff;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0052a3;
        }
      `}</style>
    </div>
  )
}

export default ChatComponent
