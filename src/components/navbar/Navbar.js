import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
         <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container"> 
                 <Link to="/" className="navbar-brand text-white">T-Shirt Design</Link>
                 <button type="button" className="navbar-toggler" 
                 data-toggle="collapse" data-target="#navbarNav"> 
                 <span className="navbar-toggler-icon btn-sm"></span>
                 </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Sign-up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Login</Link> 
                  </li>
                 </ul>
             </div>     
            </div> 
          </nav> 
        )
    }
}

export default Navbar 