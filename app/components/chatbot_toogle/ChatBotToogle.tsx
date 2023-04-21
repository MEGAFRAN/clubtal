import React, { useState } from "react"
import styles from "../../styles/components/chat-toogle.module.scss"
import ChatBot from "../chatbot/ChatBot"
import { ChatbotProps } from "../../constants/types/components_props/types"

const ChatBotToggle = ({ initialMessage, inputPlaceholderText, sendButtonText }: ChatbotProps) => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  function handleToggleChat() {
    setIsChatVisible(!isChatVisible)
  }

  return (
    <>
      {isChatVisible ? (
        <ChatBot
          initialMessage={initialMessage}
          inputPlaceholderText={inputPlaceholderText}
          sendButtonText={sendButtonText}
          onClose={handleToggleChat}
        />
      ) : (
        <button className={styles.open} onClick={handleToggleChat} data-testid="toogle-button">
          Chat
        </button>
      )}
    </>
  )
}
export default ChatBotToggle
