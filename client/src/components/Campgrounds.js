import React from 'react'
import Campground from './Campground'

function Campgrounds({ name, description, directions, reservationInfo, url }) {

  // const stateCampgroundsList = stateCampgrounds.map((campground) => {
  //   return (
  //     <Campground
  //       key={campground.id}
  //       id={campground.id}
  //       name={campground.name}
  //       url={campground.url}
  //       description={campground.description}
  //       addresses={campground.addresses}
  //       directionsUrl={campground.directionsUrl}
  //       activities={campground.activities}
  //     />
  //   )
  // })




  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <button src={directions} target='_blank'>Directions</button>
      <p>{reservationInfo}</p>
      <p>{url}</p>
    </div>
  )
}

export default Campgrounds