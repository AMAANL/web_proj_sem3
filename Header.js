import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles if needed

const Header = () => (
  <div className="header">
    <img src="./Hair n Things Logo - Original - 5000x5000.png" alt="Logo" height="200" width="200" />
    <div className="nav">
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link className="btn-account" to="/signin">Sign In</Link></li>
        <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
