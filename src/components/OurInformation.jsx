import React from 'react'
import { GeoAltFill, TelephoneFill } from 'react-bootstrap-icons'

const OurInformation = () => {
  return (
    <>
      <div>
        <h3 className='on-click'><TelephoneFill /> 04 236 8121</h3>
        <h3 className='on-click'><GeoAltFill /> 7 Dimock Street, Titahi Bay</h3>  
      </div>
      <div className='map-div'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2125.67518583938!2d174.8415060282106!3d-41.10922549655982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3f53938d074833%3A0xb79293daed000775!2sPeter&#39;s%20Auto%20Service!5e0!3m2!1sen!2snz!4v1700345455107!5m2!1sen!2snz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </>
  )
}

export default OurInformation
