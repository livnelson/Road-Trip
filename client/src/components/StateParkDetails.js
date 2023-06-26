import React, { useState } from 'react'
import Campgrounds from './Campgrounds'
import Campground from './Campground'
import '../styles/StateParkDetails.css'

function StateParkDetails({ images, description, activities, parkCode, parkCampgroundsList }) {
  const [showCampgrounds, setShowCampgrounds] = useState(false)

  console.log(parkCode)

  const mappedImages = images.map(image => {
    return (
      <div  key={image.id} className='image-card-style'>
        <img src={image.url} alt={image.altText} className='park-card-image' />
        <p className='photo-cred'> Photo Credit: {image.credit}</p>
        <p className='image-title'>{image.title}</p>
      </div>
    )
  })

  let activityNames = []

  const mappedActivities = activities.map(activity => {
    activityNames.push(activity.name)
    return <li key={activity.id}>{activity.name}</li>
  })

  const mappedCampgroundList = parkCampgroundsList.map((campgrounds) => {
    return (
      <Campground
        key={campgrounds.id}
        id={campgrounds.id}
        name={campgrounds.name}
        description={campgrounds.description}
        directionsURL={campgrounds.directionsURL}
        imagesURL={campgrounds.imagesURL}
        reservationInfo={campgrounds.reservationInfo}
        url={campgrounds.url}
      />
    )
  })

  function handleShowCampgrounds() {
    setShowCampgrounds(!showCampgrounds)
  }

      

  // console.log(activityNames)

  // console.log(mappedActivities)

  return (
    <div className='park-details'>
      <h6 className='park-subheader'>Park Description:</h6>
      <p className='park-description'>{description}</p>
      <div>
        <br />
        <h6 className='park-subheader'>Park Activities:</h6>
        <ul className='activity-details'>{mappedActivities}</ul>
      </div>
      <div>
        <h6 className='park-subheader'>Park Images:</h6>
        <span className='image-cards'>{mappedImages}</span>
      </div>
      <br />
      <h4 onClick={handleShowCampgrounds}>See Campgrounds?</h4>
      <Campgrounds parkCampgroundsList={parkCampgroundsList} mappedCampgroundList={mappedCampgroundList} />
    </div>
  )
}

export default StateParkDetails