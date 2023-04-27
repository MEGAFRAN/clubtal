import React, { useState } from "react"
import styles from "../../styles/components/chat-toogle.module.scss"
import ChatBot from "../chatbot/ChatBot"
import { ChatbotProps } from "../../constants/types/components_props/types"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"

const ChatBotToggle = ({ initialMessage, inputPlaceholderText, sendButtonText }: ChatbotProps) => {
  const [isChatVisible, setIsChatVisible] = useState(false)
  const [hasOpenedChat, setHasOpenedChat] = useState(false);

  function handleToggleChat() {

    setIsChatVisible(!isChatVisible)

    if (!hasOpenedChat) {
      gtmEvents.openChatbot({ initialMessage, inputPlaceholderText, sendButtonText });
      setHasOpenedChat(true);
    }
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
