import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login({ setUser }) {
  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false)
      if (r.ok) {
        r.json().then((userData) => {
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))
          navigate('/plan_trip')
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <div className='login-page'>
      <div className='login-body'>
        <div className="login-card">
          <h1 className='login-greeting'>Sign In</h1>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <input
                className="input-field"
                placeholder="Enter Username"
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                className="input-field"
                placeholder="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              {isLoading ? "Loading..." : null}
              <button className="login-button" type="submit">Sign In</button>
            </form>
          </div>
          {errors ? <div className="errors">{errors}</div> : null}
          {/* <p className="sign-up-link" onClick={handleSignUp}> New to Myflix? <span className="sign-up-form-link">Sign up now.</span></p> */}
        </div>
      </div>
    </div>
  )
}

export default Login