import { useEffect, useState } from 'react'
import { X, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'

import useCustomizer from '../hook/useCustomizer'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const MobileMenu = ({ closeMethod }) => {

  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  const [isServicesExpanded, setIsServicesExpanded] = useState(false)
  const toggleMobileMenuContent = () => {
    setIsServicesExpanded(!isServicesExpanded)
  }

  useEffect(() => {
    axios.get(`${baseUrl}/services`)
    .then((res) => {
      setServices(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  const Services = ({ services }) => {
    const mappedServices = services.map((service, index) => {
      return (
        <li key={`${service}-${index}`}><Link to={`/services/${service.id}`} className='on-click' onClick={closeMethod}>
          <h3><ArrowRight />{decodeHTMLEntities(service.title.rendered)}</h3></Link></li>
      )
    })

    return mappedServices.reverse()
  }

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

  return (
    <>{!isServicesExpanded ? (
      <aside id='mobile-menu'>
        <X className='on-click mobile-menu-back' onClick={closeMethod} />
        <ul>
          <li><Link to="/" className='on-click' 
          onClick={closeMethod}><h2>Home</h2></Link></li>
          <li><Link to="/about" className='on-click' 
          onClick={closeMethod}><h2>About</h2></Link></li>
          <li><h2 className='on-click' 
          onClick={toggleMobileMenuContent}>Services <ChevronUp /></h2></li>
          <li><Link to="/contact" className='on-click' 
          onClick={closeMethod}><h2>Contact</h2></Link></li>
        </ul>
      </aside>
    ) : (
      <aside id='mobile-menu'>
        <ArrowLeft className='on-click mobile-menu-back' onClick={toggleMobileMenuContent} />
        <h2>Services <ChevronDown /></h2>
        <ul className='services expanded'>
          {loading ? <Loading /> : <Services services={services} />}
        </ul>
      </aside>
    )}</>
  )
}

export default MobileMenu
