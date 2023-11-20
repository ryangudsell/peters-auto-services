import { useEffect } from 'react'
import Testimonials from '../components/Testimonials'
import OurInformation from '../components/OurInformation'
import { Helmet } from 'react-helmet'

import useCustomizer from '../hook/useCustomizer'

const About = () => {

  const {
    applyStyles,
  } = useCustomizer();

  useEffect(() => {
    applyStyles();
  }, [applyStyles])
  
  return (<>
    <Helmet>
      {/* Primary Meta Tags */}
      <title>About Peter's Auto Services</title>
      <meta name="title" content="Peter's Auto Services" />
      <meta name="description" content="Peter's Auto Service in Titahi Bay, Porirua is focused on providing high-quality service and customer satisfaction, operating within the Wellington region since 2008." />
      <meta name="keywords" content="Peters Auto Services, Mechanic, Auto Shop, Porirua, "/>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost:5173/" />
      <meta property="og:title" content="Peter's Auto Services" />
      <meta property="og:description" content="Peter's Auto Service in Titahi Bay, Porirua is focused on providing high-quality service and customer satisfaction, operating within the Wellington region since 2008." />
      <meta property="og:image" content="./img/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://localhost:5173/" />
      <meta property="twitter:title" content="Peter's Auto Services" />
      <meta property="twitter:description" content="Peter's Auto Service in Titahi Bay, Porirua is focused on providing high-quality service and customer satisfaction, operating within the Wellington region since 2008." />
      <meta property="twitter:image" content="./img/logo.png" />

      {/* Meta Tags Generated with https://metatags.io */}
    </Helmet>
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
  </>)
}

export default About
