import React from 'react'
import StateBanner from '../components/StateBanner'
import StateParks from '../components/StateParks'

function StatePage({ stateAbbr, states, parks, stateBannerImage, stateCampgrounds}) {
  // console.log(stateAbbr)
  // console.log(states)
  // console.log(parks)

  const filteredStates = states.filter(state => state.abbreviation === stateAbbr)

  return (
    <div>
      <StateBanner filteredStates={filteredStates} stateBannerImage={stateBannerImage} />
      <StateParks parks={parks} stateCampgrounds={stateCampgrounds} stateAbbr={stateAbbr} />
    </div>
  )
}

export default StatePage