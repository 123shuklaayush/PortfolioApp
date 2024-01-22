import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>Find me Here:</p>
        <a href="https://www.linkedin.com/in/123shuklaayush/" 
          target="_blank" 
          className="icon-container" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="icon-footer" />
        </a>
        <a href="https://github.com/123shuklaayush" 
          target="_blank" 
          className="icon-container" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BsGithub className="icon-footer" />
        </a>
      </div>
      
      <p className="text-footer">Made with ❤ by Ayush</p>
    </footer>
  );
}

export default Footer;
