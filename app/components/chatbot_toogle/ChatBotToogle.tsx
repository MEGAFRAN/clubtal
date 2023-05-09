import React, { useState } from "react"
import { useTranslation } from "next-i18next"
import styles from "../../styles/components/chat-toogle.module.scss"
import ChatBot from "../chatbot/ChatBot"
import gtmEvents from "../../services/analytics/events/google-tag-events.service"

const ChatBotToggle = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)
  const [hasOpenedChat, setHasOpenedChat] = useState(false)
  const { t } = useTranslation(["components/text"])

  function handleToggleChat() {
    setIsChatVisible(!isChatVisible)

    if (!hasOpenedChat) {
      gtmEvents.openChatbot({})
      setHasOpenedChat(true)
    }
  }

  return (
    <>
      {isChatVisible ? (
        <ChatBot onClose={handleToggleChat} />
      ) : (
        <button className={styles.open} onClick={handleToggleChat} data-testid="toogle-button">
          {t("chat")}
        </button>
      )}
    </>
  )
}
export default ChatBotToggle
