import React from 'react'
import loading from '../loader.gif'
import "../components/css/Spinner.css"
const Spinner = () => {
  return (
    <div className='text-center spinner-container'>
        <img src={loading} alt="" />
    </div>
  )
}

export default Spinner