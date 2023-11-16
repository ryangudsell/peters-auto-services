import React from 'react'
import Testimonials from '../components/Testimonials'
import OurInformation from '../components/OurInformation'

const About = () => {
  return (
    <main>
      <section className="about landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>About Us</h1>
        </div>
      </section>
      <section className='about about-the-company'>
        <h2>About Peter's Auto Services</h2>
        <p>Peter's Auto Service in Titahi Bay, Porirua is focused on providing high-quality service and customer satisfaction, operating within the Wellington region since 2008.</p>
        <p>We are your general car repair and servicing experts in Porirua offering top quality automotive repairs with competitive prices.</p>
        <p>Our company is based on the belief that your needs are of the utmost importance. Our entire team is committed to meeting those needs. As a result, a high percentage of business is from repeat customers & referrals.</p>
        <p>Buy tyres from us and we fit them FREE!</p>
        {/* Above <p> tags to be replaced by WP Content */}
      </section>
      <section className='about testimonials'>
        <Testimonials />
      </section>
      <section className='about our-info'>
        <OurInformation />
      </section>
    </main>
  )
}

export default About
