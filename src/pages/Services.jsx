import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { Helmet } from "react-helmet"
import Loading from "../components/Loading"

import useCustomizer from "../hook/useCustomizer"

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${baseUrl}/services`)
    .then((res) => {
      setServices(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
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
      <title>Services Sitemap | Peter's Auto Services</title>
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
      <section className="sitemap landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>Services</h1>
        </div>
      </section>
      <section className="sitemap sitemap-list">
        <h2>Services Sitemap</h2>
        <p>Here is a list of servcies we provide.</p>
        <ul>
          {loading ? <Loading /> : services.map((service, index) => {
            return (
              <li key={`${service.title.rendered}-${index}`}>
                <Link to={`/services/${service.id}`}><h3>{decodeHTMLEntities(service.title.rendered)}</h3></Link>
              </li>
            )
          }).reverse()}
        </ul>
      </section>
    </main>
  </>)
}

export default Services
