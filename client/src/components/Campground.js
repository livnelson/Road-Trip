import React from 'react'
import '../styles/Campground.css'

function Campground({ name, description, directions, reservationInfo, url, showCampgrounds }) {

  return (
    <div>
      {showCampgrounds ? <div className='campground-detail-card'>
        <h4 className='campground-name'>{name}</h4>
        <p>{description}</p>
        <button>Directions</button>
        <p>{reservationInfo}</p>
        <p>{url}</p>
      </div> : null}
    </div>
  )
}

export default Campground