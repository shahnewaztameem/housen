import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo/Logo.svg'

const Header = () => {
  return (
    <div className='container mt-3'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img src={logo} alt='Logo'/>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li className='nav-item me-5'>
                <a className='nav-link ' aria-current='page' href='/'>
                  Buy a house
                </a>
              </li>
              <li className='nav-item me-5'>
                <a className='nav-link' href='/'>
                  Rent a house
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Mortgage
                </a>
              </li>
            </ul>
            <button className={styles.signup_btn}>Signup</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
