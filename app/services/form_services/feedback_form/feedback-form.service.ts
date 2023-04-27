import { Dispatch, SetStateAction } from "react"

const sendFeedbackMessage = async (
  endpoint: string,
  formMessage: string,
  setMessageResponseStatus: Dispatch<SetStateAction<string>>,
  setMessageResponse: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const stopLoadingEffect = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  try {
    setLoading(true)
    const dataToSend = { formMessage }
    const request: RequestInit = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    }

    await fetch(endpoint, request).then(() => {
      setMessageResponseStatus("success")
      setMessageResponse("Thanks for your opinion, Gracias por tu opinion")
    })

    stopLoadingEffect()
  } catch (error) {
    stopLoadingEffect()
  }
}
export default sendFeedbackMessage
