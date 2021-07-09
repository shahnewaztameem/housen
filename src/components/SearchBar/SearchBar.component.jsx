import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/images/icons/SearchIcon.svg'

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (searchTerm) {
      onFormSubmit(searchTerm)
    }
  }

  return (
    <>
      <BrowserView>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={onSubmit}>
                <div className='form_wrapper position-relative'>
                  <span className={`${styles.search_icon}`}>
                    <img src={searchIcon} alt='Search Icon' />
                  </span>
                  <input
                    type='text'
                    placeholder='Search for address'
                    className={`w-100 ${styles.search_input}`}
                    onChange={handleInputChange}
                    value={searchTerm}
                  />
                  <button type='submit' className={`${styles.search_btn}`}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={onSubmit}>
                <div className='form_wrapper position-relative'>
                  <span className={`${styles.search_icon}`}>
                    <img src={searchIcon} alt='Search Icon' />
                  </span>
                  <input
                    type='text'
                    placeholder='Search for address'
                    className={`w-100 ${styles.search_input}`}
                    onChange={handleInputChange}
                    value={searchTerm}
                  />
                  <button
                    type='submit'
                    className={`${styles.search_btn} ${styles.search_input_mobile}`}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  )
}

export default SearchBar
