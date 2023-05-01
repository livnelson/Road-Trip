import React from 'react'
import '../styles/NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
      <div className='menu-logo'>
        <p className='menu'>≡</p>
        <img className='logo' src='' alt='logo' />
      </div>
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

export default NavBar