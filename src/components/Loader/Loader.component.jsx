import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={`${styles.spinner_wrapper}`}>
      <div class={`${styles.spinner}`}></div>
    </div>
  )
}

export default Loader
