import React,{useState, useEffect} from 'react';
import './Auth.css';
import SendMessage from './../SendMessage/SendMessage';
import ReceivedMessage from './../ReceivedMessage/ReceivedMessage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
// import LocalStorage from'./LocalStorage/LocalStorage';


function Auth() {

    
    const [data, setData] = useState([]);
  
    const [currentUser, setCurrentUser] = useState("");
  
    const [currentMessage, setCurrentMessage] = useState("");
  
    const [fetchTrigger, setFetchTrigger] = useState(false);

    
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('/message');
          setData(response.data);
        }
        fetchData();
      }, [fetchTrigger]);

    useEffect(()=>{
         const storedUser = localStorage.getItem("currentUser")
         setCurrentUser(storedUser);
    },[])
    
      function sendMessage() {
        axios.post('/message', {
          user: currentUser,
          messageType: "text",
          messageBody: currentMessage
        })
        setCurrentMessage("");
        setFetchTrigger(!fetchTrigger);
    
      }
     
  return (
    <div>
    <div className='container'>
    <div className='title'>
    <div className='text-center'>
      <h2>Chat-Application</h2>
      </div>
    </div>
    </div>
    <div className='container'>
    <div className='box'>
    
    {
          data.map((item, index) => {
            if(item.user === currentUser){
              return <SendMessage key={index} user={item.user} message={item.messageBody} />
              
            }
            else{
              return <ReceivedMessage key={index} user={item.user} message={item.messageBody} />
            }
          })
       }


    </div>
    <center>
    <div className='msg'>
        
    <input type="text" className="form-control mt-3" placeholder="Enter Username..."
       onChange={(e)=>{setCurrentUser(e.target.value)}} />

       <input type="text" className="form-control mt-3" placeholder="Enter Message..."
        value={currentMessage}
       onChange={(e)=>{setCurrentMessage(e.target.value)}} />
       </div>
       <button className="btn btn-primary mt-3"
       onClick={sendMessage}>Send</button>
        </center>
   
       </div>
       </div>
      
  )
}

export default Auth