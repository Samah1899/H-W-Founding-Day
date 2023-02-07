import React from 'react'

import { useNavigate } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import LogOut from './LogOut';


function InterFace() {
 

    const navigate = useNavigate()


    const LogIn =()=>{
        navigate("/logIn")  
       
    }

    const LogOut =()=>{
      navigate("/sign") 
        localStorage.removeItem("firstName");
      }
        
     
  


  const NewLog =()=>{
    navigate("/sign")  
   
}
 



  return (
    <div className='main'>

        <h3 className='text'>مالحد منة، الله اللي عزنا</h3>
        <div className='btn'>
        <button onClick={LogIn}>تسجيل دخول</button>
        <button onClick={LogOut}>تسجيل خروج</button>
        <button  onClick={NewLog}> تسجيل جديد</button>
        </div>
      
    </div>
  )
}


export default InterFace


