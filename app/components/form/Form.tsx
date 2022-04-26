import { useState } from 'react'
import styles from '../../styles/components/form.module.scss'

export const Form = ({text}: any) => {

    const [messageResponse, setMessageResponse] = useState<string>('')
    const [messageResponseStatus, setMessageResponseStatus] = useState<string>('')
    const [formMessage, setFormMessage] = useState<string>('')
    const [formName, setFormName] = useState<string>('')
    const [formEmail, setFormEmail] = useState<string>('')

    const sendFormMessage = async (formMessage: string, clientName: string, clientEmail: string) =>
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
    

  return (

    <form className={styles.container}>
          
        <h2>{text[0]}</h2>
        <label>{text[1]}</label>
        <textarea required placeholder={text[2]} cols={30} rows={3} onChange={event => setFormMessage(event.target.value)}></textarea>
        <label>{text[3]}</label>
        <input type="text" required placeholder={text[4]} onChange={event => setFormName(event.target.value)}/>
        <label>{text[5]}</label>
        <input type="text" required placeholder={text[6]} onChange={event => setFormEmail(event.target.value)} />
        <p className={`response-mensaje--${messageResponseStatus}`}>{messageResponse}</p>
        <button onClick={()=> sendFormMessage(formMessage, formName, formEmail)}>{text[7]}</button>

    </form>

  )

}