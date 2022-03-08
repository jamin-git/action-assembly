import React from 'react'
import './App.css'
import Protests from './Views/protests'
import About from './Views/about'
import Signin from './Views/signin'
import Dashboard from './Views/dashboard'
import { Home } from './Views/home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    // <SessionContext.Provider value={session}>
      // <React.Fragment>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/protests">
                <Protests/>
              </Route>
              <Route exact path="/dashboard">
                <Dashboard/>
              </Route>
              <Route exact path="/signin">
                <Signin/>
              </Route>
            </Switch>
          </div>
        </Router>
      // </React.Fragment>
    // </SessionContext.Provider>
  )
}

export default App
