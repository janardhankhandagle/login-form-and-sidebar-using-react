import React, { useState } from 'react'
import './LoginSign.css'
import person from '../Assest/person.png'
import email from '../Assest/email.png'
import password from '../Assest/password.png'
export default function LoginSign() {
    const [action ,setAction]=useState("sign up")
  return (
   <>

<div className="container">
    <div className="headerp">
        <div className="text">
           {action}
        </div>
        <div className="underline"></div>

    </div>
    <div className="inputs">
        {action==="Login"? <div></div>: <div className="input">
         <img src={person} alt="" />
         <input type="text"  placeholder='name'/>
            
        </div>}
       
        <div className="input">
         <img src={email} alt="" />
         <input type="email" placeholder='email' />
            
        </div>
        <div className="input">
         <img src={password} alt="" />
         <input type="password" placeholder='password' />
            
        </div>
    </div>
    <div className="forgot-password">Lost Password <span>Click Here</span></div>
    <div className="submit-container">
        <div className={action==="Login "? "submit gray ": "submit"} onClick={()=>{setAction("sign up")}}>sign up</div>
        <div className={action==="sign up "?" submit gray ": "submit"}  onClick={()=>{setAction("Login")}}>Login</div>
    </div>
</div>


   </>
  )
}
