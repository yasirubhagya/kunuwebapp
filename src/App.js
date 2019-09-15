import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import About from './Components/About/About';

import * as ROUTES from './Constants/Routes';



const App = () => (
  <Router>
      <Route exact path = {ROUTES.DEFAULT} component = {Login}/>
      <Route path = {ROUTES.LOGIN} component = {Login}/>
      <Route path = {ROUTES.SIGN_UP} component = {SignUp}/>
      <Route path = {ROUTES.PROFILE} component = {Profile}/>
      <Route path = {ROUTES.HOME} component = {Home}/>
      <Route path = {ROUTES.ABOUT} component = {About}/>
  </Router>
);

export default App;
