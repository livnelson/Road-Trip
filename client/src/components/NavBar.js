import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
  const navigate = useNavigate()

  const handlePlanVisitClick = () => {
    navigate('/plan_visit')
  }

  return (
    <div className='navbar'>
      <div className='menu-logo'>
        <p className='menu'>≡</p>
        <img
          className='logo'
          src='https://res.cloudinary.com/dovuffpii/image/upload/v1683065902/Road-Trip/road-trip-sm-logo_m034az.png'
          alt='logo'
        />
      </div>
      <div className='plan-new-trip'>
        <button className='new-trip-btn' onClick={handlePlanVisitClick}>Plan Your Visit</button>
      </div>
    </div>
  )
}

export default NavBar