import React from 'react'
import StateParksList from './StateParksList'
import '../styles/StateParkDetails.css'


function StateParks({ parks }) {

  const stateParksList = parks.map((park) => {
    return (
      <StateParksList
        key={park.id}
        id={park.id}
        images={park.images}
        name={park.fullName}
        url={park.url}
        description={park.description}
        addresses={park.addresses}
        directionsUrl={park.directionsUrl}
        activities={park.activities}
      />
    )
  })

  return (
    <div className='state-parks-page'>
      <h4 className='state-parks-instruction'>Click on a park name to see more details and plan your trip!</h4>
      {stateParksList}
    </div>
  )
}

export default StateParks