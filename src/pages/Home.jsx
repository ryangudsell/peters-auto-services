import { Link, useNavigate } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import useCustomizer from '../hook/useCustomizer'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Home = () => {
  const navigate = useNavigate()
  const servicesEndpoint = `${baseUrl}/services`
  const pageContentEndpoint = `${baseUrl}/page_content`

  const [homeContent, setHomeContent] = useState(null)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${servicesEndpoint}`)
    .then((res) => {
      setServices(res.data)
      setLoading(false)
    })
    .catch((err) => console.log("ERROR -->", err))
  }, [])

  useEffect(() => {
    axios.get(`${pageContentEndpoint}/28`)
    .then((res) => {
      console.log(res);
      setHomeContent(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  const Services = ({ services }) => {
    const mappedServices = services.map((service, index) => {
      return (
        <div className='on-click' key={`${service}-${index}`}
          onClick={() => navigate(`/services/${service.id}`)}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${service.acf.service_image})`, color: 'white'
            }}>
              <h3>{decodeHTMLEntities(service.title.rendered)}</h3>
        </div>
      )
    })

    return (mappedServices?.reverse())
  }

  const {
    applyStyles,
  } = useCustomizer();

  useEffect(() => {
    applyStyles();
  }, [applyStyles])

  return (<>
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Peter's Auto Services</title>
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
      {loading ? <Loading /> : <>
      <section className="home landing">
        <div className='image-div'>
          <h1>Welcome to Peter's Auto Services</h1>
          <h2>Full Mechanical Repairs and Tyres in Porirua</h2>
        </div>
        <div className='text-div border-bottom'>
          
          <div dangerouslySetInnerHTML={{__html: homeContent?.content.rendered}} />
          
          <button><Link to="/contact"><h3>Contact Us</h3></Link></button>
        </div>
      </section>
      <section className='home services'>
        <h2>Our Services Include:</h2>
        <div className='services-flex'>
          {loading ? <Loading /> : <Services services={services} />}
        </div>
      </section>
      <section className='home testimonials'>
        <Testimonials />
      </section>
      </>}
    </main>
  </>)
}

export default Home
