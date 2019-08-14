import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light '>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          BOOK HOUSE
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link'>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='login' className='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
