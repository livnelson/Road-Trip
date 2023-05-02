import React from 'react'
import StateBanner from '../components/StateBanner'
import StateParks from '../components/StateParks'

function StatePage({ stateAbbr, states, parks, stateBannerImage  }) {
  // console.log(stateAbbr)
  // console.log(states)
  // console.log(parks)

  const filteredStates = states.filter(state => state.abbreviation === stateAbbr)
  // const filteredStateImage = stateBannerImage.filter(stateImage => stateImage.id === 0)

  // console.log(filteredStates)

  return (
    <div>
      <StateBanner filteredStates={filteredStates} stateBannerImage={stateBannerImage} />
      <StateParks parks={parks} />
    </div>
  )
}

export default StatePage