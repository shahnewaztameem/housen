import React from 'react'
import millify from 'millify'
import styles from './DataItem.module.css'
import filterIcon from '../../assets/images/icons/filter_icon.svg'
import rightArrowIcon from '../../assets/images/icons/RightArrow.svg'

const DataItem = ({
  realState: { city_name, short_code, rate, apartment_bed, find_more },
}) => {
  return (
    <div
      className={`d-flex ${styles.results} mb-4 justify-content-between align-items-center`}
    >
      <div className='fw-bold' style={{fontSize: '18px'}}>
        {city_name}
        {', '}
        {short_code}
      </div>

      <div className={`${styles.info_color}`}>
        <span className='me-2'>
          <img src={filterIcon} alt='filter icon' />
        </span>
        <span>
          $
          {millify(rate, {
            precision: 2,
          })}
          +
        </span>{' '}
        <span>
          &#47;{' '}
          {apartment_bed > 1 ? `${apartment_bed} Beds` : `${apartment_bed} Bed`}{' '}
        </span>
        <span>&#47; Appt. </span>
        <span className='me-2'>...{find_more} more</span>
        <span>
          <img src={rightArrowIcon} alt='Right Arrow Icon' />
        </span>
      </div>
    </div>
  )
}

export default DataItem
