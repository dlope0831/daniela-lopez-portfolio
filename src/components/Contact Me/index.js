import React, {useState} from 'react';

import {validateEmail } from '../../utils/helpers';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }  
    console.log(conFom)
    function handleChange(e) {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          console.log(isValid);
          //isValid conditional statement
          if(!isValid) {
            setErrorMessage('Your email is invalid');
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage){
        setFormState({...formState, [e.target.name]: e.target.value})
      }
      }
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact;