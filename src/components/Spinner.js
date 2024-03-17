import React from 'react'
import "../components/css/Spinner.css"
const Spinner = (props) => {
  return (
    <div className='text-center spinner-container'>
        <img src={props.loader} alt="" />
    </div>
  )
}

export default Spinner