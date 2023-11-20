import { useState, useEffect } from 'react'
import axios from 'axios'
import OurInformation from '../components/OurInformation'

import useCustomizer from '../hook/useCustomizer'

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const testForm = new FormData()
    testForm.append("your-name", name)
    testForm.append("your-email", email)
    testForm.append("your-subject", subject)
    testForm.append("your-message", message)

    axios.post(formEndpoint, testForm, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((res) => {
      console.log("response ->", res);
      setSubmitted(true)
    })
    .catch((err) => {
      console.log("error ->", err);
      setError(true)
    })
  }

  const {
    applyStyles,
  } = useCustomizer();

  useEffect(() => {
    applyStyles();
  }, [applyStyles])

  return (
    <main>
      <section className="contact landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className='contact contact-form'>
        <form onSubmit={handleSubmit} method='POST'>
          {!submitted && <>
            <div className='contact-form-greeting'>
              <h2>Contact Us</h2>
              <h3><span>We would love to hear from you!</span></h3>
            </div>
            <div className='contact-form-name'>
              <label><h3>Name:</h3></label>
              <input type="name" name='name' value={name}
                placeholder='Enter your name here' 
                onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='contact-form-email'>
              <label><h3>Email:</h3></label>
              <input type="email" name='email' value={email}
                placeholder='Enter your email here' 
                onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className='contact-form-subject'>
              <label><h3>Subject:</h3></label>
              <input type="subject" name='subject' value={subject}
                placeholder='Enter your enquiry subject here' 
                onChange={(event) => setSubject(event.target.value)} />
            </div>
            <div className='contact-form-message'>
              <label><h3>Message:</h3></label>
              <textarea type="message" name='message' value={message}
                rows={10} placeholder='Enter your enquiry message here' 
                onChange={(event) => setMessage(event.target.value)} />
            </div>
            <div className='contact-submit'>
              <button type='submit' className='on-click'><h3>Submit</h3></button>
            </div>
          </>}

          {submitted && <div className='response'>
            <h3>Thank you for your message!</h3>
            <p>We'll be in touch soon &#128513;</p>
            <br /><br /><br />
          </div>}

          {error && <div className='response'>
            <h3>Error!</h3>
            <p>Sorry, we were unable to send your message.</p>
          </div>}

        </form>
      </section>
      <section className='contact our-info'>
        <OurInformation />
      </section>
    </main>
  )
}

export default Contact
