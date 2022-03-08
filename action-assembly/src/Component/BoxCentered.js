import React from 'react'
import {useRef, useState} from 'react'
import '../CSS/BoxCentered.css'
import axios from 'axios'
import signup from "../resources/signupillustration.svg"
import signin from "../resources/signup illu.svg"

// Acts as the sign in box

function BoxCentered(props) {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const password = useRef();
  let [user, setUser] = useState("");
  let [newAccount, setNewAccount] = useState(false);

  const liftVals = async (event) => {
    let loggedIn = await props.handleLogin(email.current.value, password.current.value);
    console.log(loggedIn);

    if (loggedIn?.data.success) {
      // setUser(loggedIn.data.fname + " " + loggedIn.data.lname);
      window.location.reload()
    } else {
      setUser("failed to login");
    }
  }

  const changeScreen = () => {
    setNewAccount(!newAccount);
    if (newAccount) {
      fname.current.value = ""
      lname.current.value = ""
    }
    email.current.value = ""
    password.current.value = ""
  }

  const createAccount = async () => {
    if (!fname.current.value || !lname.current.value || !email.current.value || !password.current.value) {
      alert("Please fill out all fields")
      return
    } else {
      let result = await axios.post('http://localhost:8080/account/register', {
        firstName: fname.current.value,
        lastName: lname.current.value,
        email: email.current.value,
        password: password.current.value
      })
      if (!result.data.success) {
        alert("Could not create account. There may be a duplicate email already in use")
        fname.current.value = ""
        lname.current.value = ""
        email.current.value = ""
        password.current.value = ""
        return
      }
      alert("created new account")
      window.location.reload()
      changeScreen()
    }
  }

  if (newAccount) {
    return (
      <div className="centered3">
        <h1>Create New Account</h1>
        <div className="two-cols">
          <div className="left-col">
            <form>
            <label>
                <p>First Name</p>
                <input ref={fname} type="text" className="input"></input>
              </label>
              <label>
                <p>Last Name</p>
                <input ref={lname} type="text" className="input"></input>
              </label>
              <label>
                <p>Email Address</p>
                <input ref={email} type="text" className="input"></input>
              </label>
              <label>
                <p>Password</p>
                <input ref={password} type="text" className="input"></input>
              </label>
            </form>   
            <button className="sign-in-button" onClick={ createAccount }>Create</button>
            <label>{user}</label>
            <button className="new-account" onClick={changeScreen}>Return to Sign In</button>
          </div>
          <div className="right-col">
            <img id= "signup" alt= "illustration" src={signup}></img>
          </div>
        </div>
      </div>
      
    )
  }

  return (
      <div className="centered">
      <h1>Sign In</h1>
      <div className="two-cols">
        <div className="left-col">
          <form>
            <label>
              <p>Email Address</p>
              <input ref={email} type="text" className="input"></input>
            </label>
            <label>
              <p>Password</p>
              <input ref={password} type="text" className="input"></input>
            </label>
          </form>   
          <button className="sign-in-button" onClick={ liftVals }>Log In</button>
          <button className="new-account" onClick={changeScreen}>Create new account</button>
        </div>
        <div className="right-col">
          <label>{user}</label>
          <img id= "signin" alt= "illustration" src={signin}></img>
        </div>
      </div>
    </div>
  )
}

export default BoxCentered
