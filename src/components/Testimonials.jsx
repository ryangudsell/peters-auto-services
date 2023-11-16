import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  
  const endpoint = `${baseUrl}/testimonials`

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      setTestimonials(res.data.reverse())
    })
    .catch((err) => console.log(err))
  }, [])

  const prevTestimonial = () => {
    setTestimonialIndex(testimonialIndex - 1)
    // If index exceeds higher boundary, reset to lowest possible value
    if (testimonialIndex < 1) {
      setTestimonialIndex(testimonials.length - 1)
    }
  }

  const nextTestimonial = () => {
    setTestimonialIndex(testimonialIndex + 1)
    // If index exceeds higher boundary, reset to lowest possible value
    if (testimonialIndex > (testimonials.length - 2)) {
      setTestimonialIndex(0)
    }
  }

  return (
    testimonials && <>
      {/* Make sure the parent element is a section with appropiate classes */}
      <h2>Testimonials</h2>
      <div className='testimonials-flex'>
        <ChevronLeft className='on-click' onClick={() => prevTestimonial()} />
        <div>
          <p>
              “<span dangerouslySetInnerHTML={{
                __html: testimonials[testimonialIndex]?.content.rendered
              }} />”
          </p>
          <p className='testimonial-author'>
             - {testimonials[testimonialIndex]?.acf.author}
             </p>
        </div>
        <ChevronRight className='on-click' onClick={() => nextTestimonial()} />
      </div>
    </>
  )
}

export default Testimonials
