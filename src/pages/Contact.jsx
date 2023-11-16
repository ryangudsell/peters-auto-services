import React from 'react'
import OurInformation from '../components/OurInformation'

const Contact = () => {
  return (
    <main>
      <section className="contact landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className='contact contact-form'>
        <form>
          <div>
            <h2>Contact Us</h2>
            <h3><span>We would love to hear from you!</span></h3>
          </div>
          <div>
            <label><h3>Name:</h3></label>
            <input type="text" placeholder='Enter your name here' />
          </div>
          <div>
            <label><h3>Email:</h3></label>
            <input type="text" placeholder='Enter your email here' />
          </div>
          <div>
            <label><h3>Subject:</h3></label>
            <input type="text" placeholder='Enter your enquiry subject here' />
          </div>
          <div>
            <label><h3>Message:</h3></label>
            <textarea rows={10} placeholder='Enter your enquiry message here' />
          </div>
          <div className='contact-submit'>
            <button type='button' className='on-click'
            onClick={() => console.log("Button Clicked")}><h3>Submit</h3></button>
          </div>
        </form>
      </section>
      <section className='contact our-info'>
        <OurInformation />
      </section>
    </main>
  )
}

export default Contact
