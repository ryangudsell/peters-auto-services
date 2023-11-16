import React from 'react'
import { GeoAltFill, TelephoneFill } from 'react-bootstrap-icons'

const OurInformation = () => {
  return (
    <>
      <div>
        <h3 className='on-click'><TelephoneFill /> 04 236 8121</h3>
        <h3 className='on-click'><GeoAltFill /> 7 Dimock Street, Titahi Bay</h3>  
      </div>
      <div>Map goes here</div>
    </>
  )
}

export default OurInformation
