import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Components/Navigation'

import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Path from './Components/Route/Route';
import Add from './Components/Bus/Add';
import Details from './Components/Bus/Details';
import Fuel from './Components/Fuel/Fuel';
import Crashanalytic from './Components/Crashanalytic/Crashanalytic';
import About from './Components/About/About';

import * as ROUTES from './Constants/Routes';


/* function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from = "/" to = "/Login" exact/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/DashBoard" component = {Drawer}/>
      </Switch>

    </BrowserRouter>

  );
} */

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path = {ROUTES.DEFAULT} component = {Login}/>

      <Route path = {ROUTES.LOGIN} component = {Login}/>
      <Route path = {ROUTES.SIGN_UP} component = {SignUp}/>
      <Route path = {ROUTES.PROFILE} component = {Profile}/>

      <Route path = {ROUTES.HOME} component = {Home}/>

      <Route path = {ROUTES.PATH} component = {Path}/>

      <Route path = {ROUTES.ADD} component = {Add}/>
      <Route path = {ROUTES.DETAILS} component = {Details}/>

      <Route path = {ROUTES.FUEL} component = {Fuel}/>

      <Route path = {ROUTES.CRASHANALYTIC} component = {Crashanalytic}/>

      <Route path = {ROUTES.ABOUT} component = {About}/>

    </div>

  </Router>
);

export default App;
