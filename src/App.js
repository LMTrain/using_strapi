import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import UserPage from './pages/UserPage'
import './App.css';

class App extends React.Component {
  
  render() {
    
    return (
    <Router>
      <Route exact path="/" render = { () => <Home />}/>
      <Route exact path="/home" render = { () => <Home />}/>
      <Route exact path="/Signin" render = { () => <Signin />}/>
      <Route exact path="/UserPage" render = { () => <UserPage />}/>
    </Router>        
    );
  }  
}


export default App;
