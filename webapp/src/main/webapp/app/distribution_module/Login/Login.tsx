import React from "react";
import  './Login.css'
import Health from './Health'
import logo from './user.png'

function Login(){
  return(
    <div className="container">
        <div className="login-box">
            <div className="top-box">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="title">
                    <h1>covider</h1>
                </div>
                <div className="textbox">
                    <input type="text" placeholder="Enter full names" id=""/>
                </div>
                <div className="textbox">
                    <input type="password" placeholder="ID Card number" id=""/>
                </div>
                <input type="button" className="button" onClick={() => <Health/>} value="Verify"/>
                <div className="checkbox">
                    <input type="checkbox" id="cbremember"/>
                    <label form="chremember">Remember Me</label>
                    <a href="text.html">Forgot Password?</a>
                </div>Health
            </div>
            <div className="signup-box">
                Not A Member? <a href="text.html">Register</a>
            </div>
        </div>
    </div>

  )
}

export default Login