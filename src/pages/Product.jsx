import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Loading from '../components/Loading'

import useCustomizer from '../hook/useCustomizer'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL
const storeBaseUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Product = () => {
  const {productId} = useParams()
  const navigate = useNavigate()
  const storeEndpoint = `${storeBaseUrl}/${productId}`
  console.log(storeEndpoint);

  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${storeEndpoint}`)
        setService(res.data)
        setLoading(false)
        console.log(service);
      } catch (error) {console.log(error)}
    };

    fetch()
  }, [storeEndpoint, productId])

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
      <title>Book a Quote | Peter's Auto Services</title>
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
      <section className="service landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>Booking</h1>
        </div>
      </section>
      {loading ? <Loading /> : (<>
        <div className='service-api-call'>
        <section className='service booking-info'>
          <h3 className='on-click go-back-service-button' 
            onClick={() => {navigate(-1)}}><ArrowLeft /> Go Back</h3>
          <h2>{decodeHTMLEntities(service.name)}</h2>
          <p>
            {"~"}
              {service.prices.currency_symbol}
              {service.prices.sale_price.slice(0, -2)}
              {service.prices.currency_decimal_separator}
              {service.prices.sale_price.slice(-2)}
            {" - "}
              {service.prices.currency_symbol}
              {service.prices.regular_price.slice(0, -2)}
              {service.prices.currency_decimal_separator}
              {service.prices.regular_price.slice(-2)}
              {" "}{service.prices.currency_code}
            {" (Depending on Vehicle Size)"}
          </p>
          <div className='booking-options'>
            <input type="date" name="date-time" />
            <button className='on-click'><p>BOOK</p></button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: service.short_description }} />
        </section>
        <section className='service service-image'>
          <img src={`${service.images[0].src}`} alt='Service Image' />
        </section>
        </div>
      </>)}
    </main>
  </>)
}

export default Product
