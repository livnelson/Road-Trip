import React from 'react'
import '../styles/APIDocumentation.css'

function APIDocumentation() {
  return (
    <div>
      <div className='api-header'>
        <h4>This app is supported by:</h4>
      </div>
      <div className='api-documentation'>
        {/* <div classname='api-logo-link'> */}
        <img
          className='api-logo'
          src='https://res.cloudinary.com/dovuffpii/image/upload/v1683059291/Road-Trip/US-NationalParkService-Logo_mqjyfz.png'
          alt='US-NationalParkService-Logo'
        />
        <a
          className='api-link'
          href='https://www.nps.gov/subjects/developer/index.htm'
          target='_blank'
          rel="noreferrer">National Park Service API
        </a>
        {/* </div> */}
      </div>
    </div>
  )
}

export default APIDocumentation