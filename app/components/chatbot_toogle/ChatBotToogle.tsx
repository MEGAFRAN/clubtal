import React, { useState } from "react"
import { ChatBot } from "../chatbot/ChatBot"
import styles from "../../styles/components/chat-toogle.module.scss"

export const ChatBotToggle: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  function handleToggleChat() {
    setIsChatVisible(!isChatVisible)
  }

  return (
    <div className={styles.container}>
      {isChatVisible ? (
        <ChatBot onClose={handleToggleChat} />
      ) : (
        <button className={styles.open} onClick={handleToggleChat}>
          ¿Asistencia? Chat Aqui
        </button>
      )}
    </div>
  )
}
