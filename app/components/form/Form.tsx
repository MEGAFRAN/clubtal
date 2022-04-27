import { useState } from 'react'
import { sendFormMessage } from '../../services/form.service'
import styles from '../../styles/components/form.module.scss'

export const Form = ({text}: any) => {

    const [messageResponse, setMessageResponse] = useState<string>('')
    const [messageResponseStatus, setMessageResponseStatus] = useState<string>('')
    const [formMessage, setFormMessage] = useState<string>('')
    const [formName, setFormName] = useState<string>('')
    const [formEmail, setFormEmail] = useState<string>('')
    

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
        <button onClick={()=> sendFormMessage(formMessage, formName, formEmail, setMessageResponseStatus, setMessageResponse)}>{text[7]}</button>

    </form>

  )

}