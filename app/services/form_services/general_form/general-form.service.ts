import { Dispatch, SetStateAction } from "react"

export const sendFormMessage = async (
  endpoint: string,
  formMessage: string,
  clientName: string,
  clientEmail: string,
  setMessageResponseStatus: Dispatch<SetStateAction<string>>,
  setMessageResponse: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const stopLoadingEffect = () =>
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  if (!formMessage || !clientName || !clientEmail) {
    setMessageResponseStatus("error")
    setMessageResponse(
      "Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente",
    )
    stopLoadingEffect()

    return
  }

  try {
    setLoading(true)
    const dataToSend = { formMessage, clientName, clientEmail }
    const request: RequestInit = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    }

    await fetch(endpoint, request).then(() => {
      setMessageResponseStatus("success")
      setMessageResponse("Gracias recibimos tu mensaje, pronto nos estaremos comunicando contigo")
    })
  } catch (error) {
    console.error(error)
    stopLoadingEffect()
  }
}
