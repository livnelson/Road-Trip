import React from 'react'
import '../styles/HomeBanner.css'

function HomeBanner() {

  return (
    <div className='home-banner'>
      {/* <img
        className='large-logo'
        src='https://res.cloudinary.com/dovuffpii/image/upload/v1683057776/Road-Trip/road-trip_j6zboc.png'
        alt='logo'
      /> */}
      <div className='body'>

      <h1 className='tagline'>
        Making the planning part of your National Park adventure <em>just as fun.</em>
      </h1>
      <p className='description'>
        Route from A to B and discover what you love in between. Plan better trips, collaborate with friends, enjoy the process.
      </p>
      </div>

    </div>
  )
}

export default HomeBanner