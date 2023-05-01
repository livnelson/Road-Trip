// client/src/components/App.js
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PlanTrip from '../pages/PlanTrip'
import StatePage from '../pages/StatePage'

function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState('')

  // auto-account-login
  useEffect(() => {
    fetch('/me')
      .then((r) => {
        if (r.ok) {
          r.json().then((userData) => {
            // console.log(userData)
            setUser(userData)
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home errors={errors} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/plan_trip' element={<PlanTrip user={user} />} />
        <Route path='/visit_state' element={<StatePage user={user} />} />
      </Routes>
    </div>
  )
}

export default App
