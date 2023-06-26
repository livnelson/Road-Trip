import React from 'react'
import { useNavigate } from 'react-router-dom'
import StateBanner from '../components/StateBanner'
import StateParks from '../components/StateParks'

function StatePage({ stateAbbr, states, parks, stateBannerImage, stateCampgrounds}) {
  // console.log(stateAbbr)
  // console.log(states)
  console.log(parks)

  const navigate = useNavigate()

  const filteredStates = states.filter(state => state.abbreviation === stateAbbr)

  if (!parks) return navigate('/plan_visit')

  return (
    <div>
      <StateBanner filteredStates={filteredStates} stateBannerImage={stateBannerImage} />
      <StateParks parks={parks} stateCampgrounds={stateCampgrounds} stateAbbr={stateAbbr} />
    </div>
  )
}

export default StatePage