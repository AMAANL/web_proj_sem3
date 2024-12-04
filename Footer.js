import React from 'react';
import './Footer.css'
const Footer = () => (
    <footer>
    <div className="footer-container">
      <div className="footer-column">
        <h3>Hair 'N' Things</h3>
        <ul>
          <li><a href="#">Offline stores</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Shipping</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Imprint</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Custom Gifts</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Social</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-line"></div>
    <div className="footer-bottom">
      <p>© 2024 Hair 'N' Things</p>
      <p>BY NATURALS</p>
    </div>
    
  </footer>
);

export default Footer;
