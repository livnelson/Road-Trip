// client/src/components/App.js
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PlanVisit from '../pages/PlanVisit'
import StatePage from '../pages/StatePage'

function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState('')
  const [updatedAccount, setUpdatedAccount] = useState({})
  const [dataFetched, setDataFetched] = useState(false)
  const [stateAbbr, setStateAbbr] = useState('')
  const [parks, setParks] = useState([])
  const [states, setStates] = useState([])
  const [stateBannerImage, setStateBannerImage] = useState([])

  const MY_KEY = 'ejj9Xj8WF8yyAFJIN0Ev3IL3cZrsbkT6CCg0JJ5s'

  const navigate = useNavigate()

  // auto-account-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // console.log(user)
          setUser(user)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }, [])


  // set state park from search bar on Plan Trip page
  function handleSubmit(e) {
    e.preventDefault()

    // fetches all parks based on user input (state abbreviation)
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbr}&limit=50&start=0&api_key=${MY_KEY}`)
      .then((r) => r.json())
      .then((parksArray) => {
        // console.log(parksArray)
        setParks(parksArray.data)
        localStorage.setItem('parks', JSON.stringify(parksArray))
      })

    // fetches all states names and abbreviations
    fetch('/all_states')
      .then((r) => r.json())
      .then((statesArray) => {
        // console.log(statesArray)
        setStates(statesArray)
      })

    // fetches state image for state page banner
    fetch(`https://developer.nps.gov/api/v1/multimedia/galleries?parkCode=&stateCode=${stateAbbr}&limit=1&start=1&api_key=${MY_KEY}`)
      .then((r) => r.json())
      .then((stateImage) => {
        console.log(stateImage)
        setStateBannerImage(stateImage.data[0].images[0].url)
        localStorage.setItem('stateBannerImage', JSON.stringify(stateImage))
      })
    navigate('/visit_state')
  }

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home errors={errors} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/plan_visit' element={<PlanVisit
          user={user}
          stateAbbr={stateAbbr}
          setStateAbbr={setStateAbbr}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/visit_state' element={<StatePage
          user={user}
          stateAbbr={stateAbbr}
          parks={parks}
          states={states}
          stateBannerImage={stateBannerImage}
        />} />
      </Routes>
    </div>
  )
}

export default App
