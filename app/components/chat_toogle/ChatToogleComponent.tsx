import React, { useState } from "react"
import { ChatComponent } from "../chat/ChatComponent"
import styles from "../../styles/components/chat-toogle.module.scss"

export const ChatToggle: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  function handleToggleChat() {
    setIsChatVisible(!isChatVisible)
  }

  return (
    <div className={styles.container}>
      {isChatVisible ? (
        <ChatComponent onClose={handleToggleChat} />
      ) : (
        <button className={styles.open} onClick={handleToggleChat}>
          Open Chat
        </button>
      )}
    </div>
  )
}
