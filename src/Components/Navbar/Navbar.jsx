import React from 'react';
import './Navbar.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [menu,setMenu] = useState("home");
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
        <li><p>Home</p></li>
        <li><p>About Me</p></li>
        <li><p>Portfolio</p></li>
        <li><p>Contact</p></li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
