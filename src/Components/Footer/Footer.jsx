import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
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
                    <p> Connect With Me! </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">Thank you for visiting my personal website!</p>
                <div className="footer-bottom-right">
                    <p>Subscribe to see what I am up to!</p>
                </div>
            </div>
        </div>
    )
}

export default Footer