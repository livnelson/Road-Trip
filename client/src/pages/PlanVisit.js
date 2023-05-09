import React, { useState, useEffect } from 'react'
import PlanVisitBanner from '../components/PlanVisitBanner'
import '../styles/PlanVisit.css'

function PlanVisit({ user, stateAbbr, setStateAbbr, handleSubmit }) {
  const [statesList, setStateslist] = useState([])
  console.log(user)

  useEffect(() => {
    // fetches all states names and abbreviations
    fetch('/all_states')
      .then((r) => r.json())
      .then((statesArray) => {
        console.log(statesArray)
        setStateslist(statesArray)
      })
  }, [])

  const stateAbbrKey = statesList.map((state) => {
    return (
      <>
        <div className='states-abbr' key={state.id}>{state.name} = {state.abbreviation}</div>
        <br />
      </>
    )
  })

  return (
    <div >
      <PlanVisitBanner />
      <div className='plan-trip-page'>
        {/* <p className='plan-visit-description'>
          This app is designed to help you plan and organize your next adventure to one of the beautiful national parks in the United States. With this app, you can explore various national parks, discover popular attractions, find hiking trails, and make reservations for campsites and other accommodations. Our app provides up-to-date information on park conditions, weather, and road closures, so you can plan your trip accordingly. Whether you're an experienced hiker or a first-time visitor, our National Park Trip Planner App is the perfect tool to help you make the most of your visit and create unforgettable memories in America's natural treasures.        </p> */}
        <h1 className='plan-visit-header'>
          What state would you like to visit?
        </h1>
        <h5 className='visit-form-header'>Enter the 2 letter state abbreviation below to begin your adventure:</h5>
        <div className='visit-form'>
          <form onSubmit={handleSubmit}>
            <input
              className='visit-input'
              type='text'
              value={stateAbbr}
              onChange={(e) => { setStateAbbr(e.target.value.toUpperCase()) }}
              placeholder='Enter abbreviation here'
              required
            />
            <button className='visit-btn'>Go</button>
          </form>
        </div>
        <div className='key'>
          <h5 className='states-key-heading'>State Abbreviation Key:</h5>
          <div className='states-key'>
            {stateAbbrKey}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanVisit