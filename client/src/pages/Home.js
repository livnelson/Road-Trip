import React from 'react'
import HomeBanner from '../components/HomeBanner'
import EyeBreak from '../components/EyeBreak'
import APIDocumentation from '../components/APIDocumentation'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <HomeBanner />
      <div className='home-body'>
        <img
          className='large-logo'
          src='https://res.cloudinary.com/dovuffpii/image/upload/v1683057776/Road-Trip/road-trip_j6zboc.png'
          alt='logo'
        />
        <p className='plan-visit-description'>
          This app is designed to help you plan and organize your next adventure to one of the beautiful national parks in the United States. With this app, you can explore various national parks, discover popular attractions, find hiking trails, and make reservations for campsites and other accommodations. Our app provides up-to-date information on park conditions, weather, and road closures, so you can plan your trip accordingly. Whether you're an experienced hiker or a first-time visitor, our National Park Trip Planner App is the perfect tool to help you make the most of your visit and create unforgettable memories in America's natural treasures.
        </p>

        {/* <h1 className='tagline'>
          Making the planning part of your National Park adventure <em>just as fun.</em>
        </h1>
        <p className='description'>
          Route from A to B and discover what you love in between. Plan better trips, collaborate with friends, enjoy the process.
        </p> */}
      </div>
      <EyeBreak />
      <APIDocumentation />
    </div>
  )
}

export default Home