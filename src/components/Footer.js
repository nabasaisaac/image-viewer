
import React from 'react';
import './App.css';
import { data } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Image Viewer. All rights reserved.</p>
      <div className="social-links">
        <a href="https://x.com/NABASAISAAC16" target="_blank" rel="noopener noreferrer">Twitter</a>
        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
        <a href="https://github.com/nabasaisaac" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </footer>
  );
};

export default Footer;