import './Navbar.css';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <div className="nav-icons">
        <div className="LinkedIn">
          <a href="https://www.linkedin.com/in/ohm-patel7/">
            <FaLinkedin className="nav-icon" size={30} />
          </a>
        </div>
        <div className="Email">
          <a href="mailto:ohmp@umich.edu">
          <FaEnvelope className="nav-icon" size={30} />
          </a>
        </div>
        <div className="Github">
          <a href="https://github.com/ohmp7">
          <FaGithub className="nav-icon" size={30} />
          </a>
        </div>
      </div>
      <div className="menu-scroll">
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={0} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={0} href='#myexp'><p onClick={()=>setMenu("myexp")}>Portfolio</p></AnchorLink>{menu==="myexp"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={0} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      </div>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={0} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
