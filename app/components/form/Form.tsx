import { useState } from 'react'
import { sendFormMessage } from '../../services/form.service'
import styles from '../../styles/components/form.module.scss'

export const Form = ({text}: any) => {

  const [messageResponse, setMessageResponse] = useState<string>('')
  const [messageResponseStatus, setMessageResponseStatus] = useState<string>('')
  const [formMessage, setFormMessage] = useState<string>('')
  const [formName, setFormName] = useState<string>('')
  const [formEmail, setFormEmail] = useState<string>('')


  const onSubmit = (event:any): void => {
    event.preventDefault()
    sendFormMessage(formMessage, formName, formEmail, setMessageResponseStatus, setMessageResponse)
  }


  return (

    <form className={styles.container} onSubmit={onSubmit}>

      <h2>{text[0]}</h2>

      <label form='message'>
        <span>{text[1]}</span>
        <textarea name='message' id='message' required placeholder={text[2]} cols={30} rows={3} onChange={event => setFormMessage(event.target.value)}></textarea>
      </label>

      <label form='name'>
        <span>{text[3]}</span>
        <input name='name' id='name' autoComplete='name' type="text" required placeholder={text[4]} onChange={event => setFormName(event.target.value)}/>
      </label>

      <label form='email'>
        <span>{text[5]}</span>
        <input name='email' id='email' autoComplete='email' type="email" required placeholder={text[6]} onChange={event => setFormEmail(event.target.value)} />
      </label>

      <p className={`response-mensaje--${messageResponseStatus}`}>{messageResponse}</p>

      <button type="submit">{text[7]}</button>





    </form>

  )

}