import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/PlanTrip.css'

function PlanTrip({ user }) {
  console.log(user)
  const navigate = useNavigate()
  
  // if no user is logged in redirect to the login page
  if (!user.id) return (navigate('/login'))
  //else if user is logged in, load page
  return (
    <div className='plan-trip-page'>
      <h2>Welcome, {user.first_name}!</h2>
      <div className='searchbar'>
        <form>
          <input
            className='search-input'
            type='text'
            value=''
            // onChange={handleChange}
            placeholder='What state would you like to visit'
            required
          />
          <button className='search-button'>Go</button>
        </form>
      </div>

    </div>
  )
}

export default PlanTrip