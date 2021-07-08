import React from 'react'
import DataItem from '../DataItem/DataItem.component'

const DataList = ({ realEstateList }) => {
  const renderList = realEstateList.map((realState, idx) => (
    <DataItem key={idx} realState={realState} />
  ))
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>{renderList}</div>
      </div>
    </div>
  )
}

export default DataList
