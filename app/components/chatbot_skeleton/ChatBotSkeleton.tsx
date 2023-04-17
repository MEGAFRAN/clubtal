import { useRef } from "react"
import styles from "../../styles/components/chat.module.scss"
import { ChatbotSkeletonProps } from "../../constants/types/components_props/types"

const ChatBotSkeleton = ({ colors }: ChatbotSkeletonProps) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const messages = [
    {
      role: "system",
      content: "Hola! Soy Club, tu asistente virtual. ¿Cuentame como puedo ayudarte?",
    },
    {
      role: "user",
      content: "Me gustaria saber como puedo comprar un producto",
    },
    {
      role: "assistant",
      content:
        "Puedes comprarlo agregando un producto al carrito y luego pagarlo con diferentes medios de pago",
    },
  ]

  const messageStyle = {
    backgroundColor: "white",
  }

  const closeButton = (
    <button
      style={{
        color: colors.two,
      }}
      className={styles.close_button}
      data-testid="close-button"
    >
      &#x2715;
    </button>
  )

  const background = (
    <div
      style={{
        backgroundColor: colors.three,
      }}
      className={styles.chat_messages}
      ref={chatContainerRef}
      data-testid="background"
    >
      {messages.map((message, index) => {
        if (message.role === "system") messageStyle.backgroundColor = colors.four
        if (message.role === "user") messageStyle.backgroundColor = colors.five
        if (message.role === "assistant") messageStyle.backgroundColor = colors.six
        return (
          <div
            style={{
              backgroundColor: messageStyle.backgroundColor,
            }}
            key={index}
            className={`${styles.message} ${styles[message.role]}`}
          >
            {message.content}
          </div>
        )
      })}
    </div>
  )

  const sendButton = (
    <button
      style={{
        backgroundColor: colors.seven,
      }}
      type="submit"
      data-testid="send-button"
    >
      Enviar
    </button>
  )

  const form = (
    <form>
      <input type="text" placeholder="Escribe tu mensaje..." aria-label="Escribe tu mensaje" />
      {sendButton}
    </form>
  )

  const component = (
    <div
      style={{
        backgroundColor: colors.one,
      }}
      className={styles.container}
    >
      {closeButton}
      {background}
      {form}
    </div>
  )

  return component
}
export default ChatBotSkeleton
