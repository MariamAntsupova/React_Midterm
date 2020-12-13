import React, { useState } from 'react';
import './App.css';
import LoginForm from "./Components/LoginForm";
import Nav from "./Nav/Nav";
import Login from './Login/Login';
import Home from './Components/Home';
import parce from './parce';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
function App() {
  return(
    <Router>
      <>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/blog" component={parce} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
