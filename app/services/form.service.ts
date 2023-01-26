import { Dispatch, SetStateAction } from "react"

export const sendFormMessage = async (
  formMessage: string,
  clientName: string,
  clientEmail: string,
  setMessageResponseStatus: Dispatch<SetStateAction<string>>,
  setMessageResponse: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  if (formMessage && clientName && clientEmail) {
    const dataToSend = { formMessage, clientName, clientEmail }

    try {
      setLoading(true)
      const request: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      }

      await fetch("https://post-push.azurewebsites.net/api/EmailService", request).then(() => {
        setLoading(false)
        setMessageResponseStatus("success")
        setMessageResponse("Gracias recibimos tu mensaje, pronto nos estaremos comunicando contigo")
      })
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  } else {
    setLoading(false)
    setMessageResponseStatus("error")
    setMessageResponse(
      "Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente",
    )
  }
}
