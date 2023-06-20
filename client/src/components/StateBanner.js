import React from 'react'
import StateName from './StateName'
import '../styles/StateBanner.css'

function StateBanner({ filteredStates, stateBannerImage }) {
  // console.log(filteredStates)
  // console.log(stateBannerImage)

  const mappedState = filteredStates.map(state => {
    return (
      <StateName key={state.id} fullName={state.name} />
    )
  })

  // const mappedStateBannerImage = filteredStateImage.map(stateImage => {
  //   return (
  //     <img
  //       key={stateImage.data.id}
  //       src={stateImage.url}
  //       alt={stateImage.altText}
  //     />
  //   )
  // })

  // console.log(mappedStateBannerImage)

  return (
    <div className='state-banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${stateBannerImage})`,
        backgroundPosition: 'center top',
      }}
    >
      {/* <img src={mappedStateBannerImage} alt='' /> */}
      <h2 className='state-banner-heading'>{mappedState} National Parks</h2>
    </div>
  )
}

export default StateBanner