import React from 'react'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className={`col-md-12 text-center ${styles.custom_hero_width}`}>
          <div className='heading'>
            <h1>Find your ideal home</h1>
          </div>
          <h4 className='sub_heading'>
            Search from more than 19 million of inspected appartments, houses,
            cottages, villas, manors and mansions
          </h4>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
