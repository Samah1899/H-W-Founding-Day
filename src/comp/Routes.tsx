import React from 'react'
 import InterFace from './InterFace'
 import LogIn from './LogIn'
 import HomePage from './HomePage'
 import LogOut from './LogOut'
import { Routes as Routess, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Nav from './Nav'
import Home from './Home'

function Routes() {



  return (
    <div>
<Routess>
<Route path="/" element={<Home/>}></Route>
<Route path="/logIn" element={<LogIn/>}></Route>
<Route path="/saudiday" element={<HomePage/>}></Route>
<Route path="/Logout" element={<LogOut/>}></Route>
<Route path="/signUp" element={<SignUp/>}></Route>

</Routess>
    </div>
  )
}

export default Routes