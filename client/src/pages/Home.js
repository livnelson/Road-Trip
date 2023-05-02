import React from 'react'
import HomeBanner from '../components/HomeBanner'
import EyeBreak from '../components/EyeBreak'
import APIDocumentation from '../components/APIDocumentation'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <HomeBanner />
      <div>
        <h1 className='tagline'>
          Making the planning part of your National Park adventure <em>just as fun.</em>
        </h1>
        <p className='description'>
          Route from A to B and discover what you love in between. Plan better trips, collaborate with friends, enjoy the process.
        </p>
      </div>
      <EyeBreak />
      <APIDocumentation />
    </div>
  )
}

export default Home