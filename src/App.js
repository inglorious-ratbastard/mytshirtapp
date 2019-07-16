import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Project from './components/project/Projects'; 
import './App.css';


class App extends Component {
  render() {    
   return (
     <Router>
      <div>
      <Navbar />   
      <Dashboard />
      <Project />
      </div>
     </Router>
     );
  }
}

export default App;
