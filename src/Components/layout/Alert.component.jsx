import React from 'react';
import './alert.css'

const Alert = ({ alertMsg }) => {
  console.log(alertMsg)
  return (
    alertMsg !== null && (
      <div className="alert-container fade">
        <p className="alert-message"> {alertMsg} </p>
      </div>
    )
  )
}

export default Alert;