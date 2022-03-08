import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import BoxCentered from '../Component/BoxCentered'
import axios from 'axios'
import '../CSS/signin.css'

function Signin(props) {
    const login = async (emailVal, passwordVal) => {
        const loginOutput = await axios.post('http://localhost:8080/account/login', {
          email: emailVal,
          password: passwordVal
        });
        console.log(loginOutput);
        
        if (loginOutput.data.success) {
          localStorage.setItem('email', emailVal);
          localStorage.setItem('name', loginOutput.data.fname + ' ' + loginOutput.data.lname)
        }

        return loginOutput;
    }

    const signOut = () => {
      localStorage.clear()
      window.location.reload()
    }

    if (localStorage.getItem('email')) {
      return (
        <div>
          <Navbar />
          <div className="sign-out-box">
            <h1 className="welcome-splash">Welcome {localStorage.getItem('name')}!</ h1>
            <button className="sign-out-button" type="submit" onClick={signOut}>Sign Out</button>
          </div>
          <Footer />
        </div>
      )
    }

    return (
      <div>
          <Navbar />
          <BoxCentered handleLogin={login}/>
          <Footer />
      </div>
    )
}

export default Signin

