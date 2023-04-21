import React, { useState } from "react"
import styles from "../../styles/components/chat-toogle.module.scss"
import ChatBot from "../chatbot/ChatBot"

const ChatBotToggle = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  function handleToggleChat() {
    setIsChatVisible(!isChatVisible)
  }

  return (
    <>
      {isChatVisible ? (
        <ChatBot onClose={handleToggleChat} />
      ) : (
        <button className={styles.open} onClick={handleToggleChat} data-testid="toogle-button">
          Chat
        </button>
      )}
    </>
  )
}
export default ChatBotToggle
