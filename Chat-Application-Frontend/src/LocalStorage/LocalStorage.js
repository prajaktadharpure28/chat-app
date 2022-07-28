import React, { useState } from 'react';

function LocalStorage() {
  const [currentUser, setCurrentUser] = useState([]);

  const handle=()=>{
    localStorage.setItem("currentUser", currentUser)
  }

  return (
    <div className='container'>
      <div className='card p-5 mt-3'>
        <h1 className='text-center'>Current User</h1>
        <input className='input_text w-100 mt-2' type="text" placeholder='Enter Current user...'
        onChange={(e)=>setCurrentUser(e.target.value)}/>
        <br></br>
       <button className='btn btn-primary w-100 mt-2' onClick={handle}>send</button>
      </div>
    </div>
  )
}

export default LocalStorage