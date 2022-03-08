import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import '../CSS/Navbar.css'

import logo from "../resources/redcirclefist.svg"

function Navbar() {
    let [signedInText] = useState(localStorage.getItem('email') !== null ? "Sign Out" : "Sign In")
    
    return (
        <div>
            <header className="navbar">
                <a className="navbar-li" href="/">
                    <span className="logo-name">
                        <img src={logo} alt="logo" className="header-img"></img>
                    </span>
                </a>
                <nav>
                    <ul className="navbar-inner">
                        <li className="navbar-li"><Link to="/" className="navbar-item">Home</Link></li>
                        <li style={localStorage.getItem('email') !== null ? {display: ""} : {display: "none"}} className="navbar-li"><Link to="/dashboard" className="navbar-item">Dashboard</Link></li>
                        <li className="navbar-li"><Link to="/protests" className="navbar-item">Protests</Link></li>
                        <li className="navbar-li"><Link to="/about" className="navbar-item">About</Link></li>
                        <li className="navbar-li"><Link to="/signin" className="navbar-item">{signedInText}</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        
    )
}

export default Navbar
