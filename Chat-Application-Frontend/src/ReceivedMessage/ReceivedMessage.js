import React from 'react'
import "./ReceivedMessage.css"

function ReceivedMessage(props) {
  return (
    <div>
         <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <div className='card2'>
                <h6>{props.user}</h6>
                <p>{props.message}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReceivedMessage