import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import Loading from "../components/Loading"

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

  return (
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
  )
}

export default Services
