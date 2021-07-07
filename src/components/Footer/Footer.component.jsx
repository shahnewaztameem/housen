import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className='container'>
      <div className={`row ${styles.footer_color}`}>
        <div className='col-md-6'>
          <p>Housen &copy; {new Date().getFullYear()}</p>
        </div>
        <div className='col-md-6'>
          <div className='footer-nav text-end'>
            <nav className={`${styles.footer_color}`}>
              <a className="me-4" href='/'>About</a>
              <a className="me-4" href='/'>Faq</a>
              <a className="me-4" href='/'>Terms & Conditions</a>
              <a className="me-4" href='/'>Privacy Policy</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
