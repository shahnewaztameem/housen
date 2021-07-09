import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <BrowserView>
    <footer className={`py-3 bg-white ${styles.footer_wrapper}`}>
        <div className='container'>
          <div className={`row ${styles.footer_color}`}>
            <div className='col-md-6'>
              <p>Housen &copy; {new Date().getFullYear()}</p>
            </div>
            <div className='col-md-6'>
              <div className='footer-nav text-end'>
                <nav className={`${styles.footer_color}`}>
                  <a className='me-4' href='/'>
                    About
                  </a>
                  <a className='me-4' href='/'>
                    Faq
                  </a>
                  <a className='me-4' href='/'>
                    Terms & Conditions
                  </a>
                  <a className='me-4' href='/'>
                    Privacy Policy
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BrowserView>
      
      <MobileView>
        <footer className={`py-3 bg-white ${styles.footer_wrapper}`}>
          <div className='container'>
            <div className={`row ${styles.footer_color}`}>
              <div className='col-md-12 text-center'>
                <p>Housen &copy; {new Date().getFullYear()}</p>
              </div>
              <div className='col-md-12'>
                <div className='footer-nav text-end'>
                  <nav className={`${styles.footer_nav_mobile}`}>
                    <a className='me-4' href='/'>
                      About
                    </a>
                    <a className='me-4' href='/'>
                      Faq
                    </a>
                    <a className='me-4' href='/'>
                      Terms & Conditions
                    </a>
                    <a className='me-4' href='/'>
                      Privacy Policy
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </MobileView>
    </>
  )
}

export default Footer
