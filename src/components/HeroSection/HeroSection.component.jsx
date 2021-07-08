import React from 'react'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className='text-center col-md-6 offset-md-3'>
          <div className='heading'>
            <h1 className={`${styles.hero_title}`}>Find your ideal home</h1>
          </div>
          <h4 className={`${styles.sub_heading}`}>
            Search from more than 19 million of inspected appartments, houses,
            cottages, villas, manors and mansions
          </h4>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
