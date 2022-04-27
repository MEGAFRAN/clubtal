import { Dispatch, SetStateAction } from "react"

export const sendFormMessage = async (formMessage: string, clientName: string, clientEmail: string,
                                        setMessageResponseStatus: Dispatch<SetStateAction<string>>,
                                        setMessageResponse: Dispatch<SetStateAction<string>>) =>
{
    
    if (formMessage && clientName && clientEmail)
    {
        const dataToSend = { formMessage, clientName, clientEmail }
        
        try
        {
            const request: RequestInit = { method: "POST", mode: "cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(dataToSend) }

            await fetch("https://post-push.azurewebsites.net/api/EmailService", request)
                .then(() =>
                {
                    setMessageResponseStatus("success")
                    setMessageResponse("Gracias recibimos tu mensaje, pronto nos estaremos comunicando contigo")
                })
        }
        catch (error) { console.error(error) }
    }
    else
    {
        setMessageResponseStatus("error")
        setMessageResponse("Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente")
    } 
}