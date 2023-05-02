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
      {stateParksList}
    </div>
  )
}

export default StateParks