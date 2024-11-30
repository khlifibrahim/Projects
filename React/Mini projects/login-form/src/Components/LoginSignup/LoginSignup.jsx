import React from 'react'
import './LoginSignup.css'
import email from '../Assets/email.png'
import password from '../Assets/password.png'
import person from '../Assets/person.png'

function LoginSignup() {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={person} alt="" />
                <input type="text" name="" id="" />
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="email" name="" id="" />
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" name="" id="" />
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        <div className="submite-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup