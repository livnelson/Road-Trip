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
        <h2 className='plan-visit-header'>WELCOME</h2>
        <p className='plan-visit-description'>
          Embark on your epic national park adventure with our amazing app! It's your ultimate companion for exploring the stunning national parks of the United States. Discover jaw-dropping attractions, hike breathtaking trails, and plan your trip like a pro. Say goodbye to confusion and hello to convenience as you easily make reservations for campsites and accommodations.
          <br></br>
          <br></br>
          Stay in the know with up-to-the-minute updates on park conditions, weather, and road closures. No more unexpected surprises ruining your journey! Whether you're a seasoned explorer or a first-time visitor, our National Park Trip Planner App is here to make your experience extraordinary.
          <br></br>
          <br></br>
          Unleash your inner adventurer and create unforgettable memories in America's natural treasures. Download our app now and let the fun-filled exploration begin!
        </p>
      </div>
      <EyeBreak />
      <APIDocumentation />
    </div>
  )
}

export default Home