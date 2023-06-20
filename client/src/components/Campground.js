import React from 'react'
import '../styles/Campground.css'

function Campground({ name }) {
  return (
    <div className='campground-detail-card'>
      <p className='campground-name'>{name}</p>
    </div>
  )
}

export default Campground