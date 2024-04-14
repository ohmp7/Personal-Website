import React from 'react';
import './Navbar.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-icons">
        <div className="LinkedIn">
          <FaLinkedin className="nav-icon" size={30} />
        </div>
        <div className="Email">
          <FaEnvelope className="nav-icon" size={30} />
        </div>
        <div className="Github">
          <FaGithub className="nav-icon" size={30} />
        </div>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
