import React, { useState } from 'react'
import StateParkDetails from './StateParkDetails'
import Campgrounds from './Campgrounds'
import '../styles/StateParkDetails.css'

function StateParksList({ id, name, url, images, description, addresses, directionsURL, activities, parkCode, stateAbbr }) {
  const [showParkDetails, setShowParkDetails] = useState()
  const [parkCampgroundsList, setParkCampgroundsList] = useState([])

  const MY_KEY = 'ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s'


  const filteredAddresses = addresses.filter(address => {
    if (address.type === 'Physical') return true
  })

  const mappedAddresses = filteredAddresses.map(address => {
    return (
      <div key={id}>
        <h6 className='park-subheader'>Park Address:</h6>
        <div className='park-address'>
          <p className='address'>{address.line1}</p>
          <p className='address'>{address.city}, {address.stateCode} {address.postalCode}</p>
        </div>
      </div>)
  })

  // const filteredCampgrounds = stateCampgrounds.filter((campgrounds) => {
  //   if (campgrounds.parkCode === parkCode) return true
  // })

  // const mappedStateCampgrounds = filteredCampgrounds.map((campground) => {
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

  async function handleShowParkDetails() {
    // fetches park campgrounds
    await fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&stateCode=&limit=50&api_key=${MY_KEY}`)
      .then((r) => r.json())
      .then((parkCampgroundsData) => {
        console.log(parkCampgroundsData)
        setParkCampgroundsList(parkCampgroundsData.data)
      })


    setShowParkDetails(!showParkDetails)
  }

  const mappedCampgroundList = parkCampgroundsList.map((campgrounds) => {
    return (
      <Campgrounds
        key={campgrounds.id}
        name={campgrounds.name}
        description={campgrounds.description}
        directionsURL={campgrounds.directionsURL}
        imagesURL={campgrounds.imagesURL}
        reservationInfo={campgrounds.reservationInfo}
        url={campgrounds.url}
      />
    )
  })

  return (
    <div className='park-detail-card'>
      <h4 className='park-name' onClick={handleShowParkDetails}>{name}</h4>
      <h6 className='park-subheader'>Park Website: <a href={url} target='_blank' rel="noreferrer">{url}</a></h6>
      <span>{mappedAddresses}</span>
      {showParkDetails ? <StateParkDetails
        key={id}
        images={images}
        name={name}
        url={url}
        description={description}
        addresses={addresses}
        directionsURL={directionsURL}
        activities={activities}
        parkCode={parkCode}
        mappedCampgroundList={mappedCampgroundList}
      /> : null}
    </div>
  )

}

export default StateParksList