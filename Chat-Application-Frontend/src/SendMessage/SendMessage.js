import React from 'react';
import "./SendMessage.css"

function SendMessage(props) {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <div className='card1'>
                <h6>{props.user}</h6>
                <p>{props.message}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendMessage