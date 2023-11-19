import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const SingleService = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const endpoint = `${baseUrl}/services`
  let testimonialEndpoint = ``

  const [servicesArray, setServicesArray] = useState([])
  const [servicesArrayIndex, setServicesArrayIndex] = useState(null)

  const [service, setService] = useState(null)
  const [testimonial, setTestimonial] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${endpoint}/${id}`)
    .then((res) => {
      setService(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    getTestimonial(service)
  }, [service])

  function getTestimonial (service) {
    if (!service) return
    testimonialEndpoint = `${baseUrl}/testimonials?service=${service.service[0]}`

    axios.get(`${testimonialEndpoint}`)
    .then((res) => {
      if (res.data[0]) {
        setTestimonial(res.data[0])
      }
    })
    .catch((err) => {console.log(err)})
  }

  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  // Prev/Next Buttons
  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      setServicesArray(res.data.reverse())
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    let myService = service
    servicesArray.map((arrayItem, index) => {
      if (arrayItem.id === myService.id) {
        setServicesArrayIndex(index)
      }
    })
  }, [servicesArray])

  const prevService = () => {
    let newIndex = servicesArrayIndex - 1
    if (newIndex < 0) {
      newIndex = servicesArray.length - 1
    }
    servicesArray.map((arrayItem, index) => {
      if (newIndex === index) {
        let newId = arrayItem.id
        navigate(`/services/${newId}`)
      }
    })
  }

  const nextService = () => {
    let newIndex = servicesArrayIndex + 1
    if (newIndex > servicesArray.length - 2) {
      newIndex = 0
    }
    servicesArray.map((arrayItem, index) => {
      if (newIndex === index) {
        let newId = arrayItem.id
        navigate(`/services/${newId}`)
      }
    })
  }

  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  return (
    <main>
      <section className="service landing">
        <div className='image-div'></div>
        <div className='text-div border-bottom'>
          <h1>Services</h1>
        </div>
      </section>
      {loading ? <Loading /> : (<>
        <section className='service service-info'>
          <h3 className='on-click go-back-service-button' 
            onClick={() => {navigate(-1)}}><ArrowLeft /> Go Back</h3>
          <h2>{decodeHTMLEntities(service.title.rendered)}</h2>
          <div dangerouslySetInnerHTML={{ __html: service.content.rendered }} />
          <button><h3>BOOK A QUOTE</h3></button>
        </section>
        <section className='service service-image'>
          <img src={`${service.acf.service_image}`} alt='Service Image' />
        </section>
        {testimonial && 
        <section className='service service-testimonials'>
          <h2>Hear from Satisfied Customers</h2>
          <div>
            <p>“<span dangerouslySetInnerHTML={{__html: decodeHTMLEntities(testimonial.content.rendered)}} />”</p>

            <p className='testimonial-author'> - {testimonial.acf.author}</p>
          </div>
        </section>}
        <section className='service page-buttons'>
          <div>
            <h3 className='on-click prev-button' onClick={() => prevService()}>
              <ArrowLeft /> <span>Previous Service</span>
            </h3>

            <h3 className='on-click next-button' onClick={() => nextService()}>
              <span>Next Service</span> <ArrowRight />
            </h3>
          </div>
        </section>
      </>)}
    </main>
  )
}

export default SingleService
