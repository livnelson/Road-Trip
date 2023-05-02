import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/EyeBreak.css'

function EyeBreak() {
  const navigate = useNavigate()

  const handlePlanVisitClick = () => {
    navigate('/plan_visit')
  }

  return (
    <div className='eyebreak'>
      <h2 className='eyebreak-tagline'>Your adventure awaits!</h2>
      <button className='eyebreak-button' onClick={handlePlanVisitClick}>Plan Your Visit</button>
    </div>
  )
}

export default EyeBreak