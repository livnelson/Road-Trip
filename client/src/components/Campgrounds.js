import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Campground from './Campground'
import '../styles/Campground.css'


function Campgrounds({ mappedCampgroundList }) {
  const [showCampgrounds, setShowCampgrounds] = useState(true)
  const navigate = useNavigate()

  function handleShowCampgrounds() {
    setShowCampgrounds(!showCampgrounds)
  }

  return (
    <div>
      {/* <h4 onClick={handleShowCampgrounds}>See Campgrounds?</h4> */}
      {/* <Campground id={id} name={name} description={description} directions={directions} reservationInfo={reservationInfo} url={url} showCampgrounds={showCampgrounds} /> */}
      {mappedCampgroundList}
    </div>
  )
}

export default Campgrounds