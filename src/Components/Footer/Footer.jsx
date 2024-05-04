import React, { useState } from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const [buttonText, setButtonText] = useState("Subscribe");
    const [buttonColor, setButtonColor] = useState("linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.6%)");
    
    const handleSubscribe = () => {
        setButtonText("Subscribed");
        setButtonColor("#808080");
    };

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
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
                    <p> Connect With Me! </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe" style={{ background: buttonColor }} onClick={handleSubscribe}>
                        {buttonText}
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">Thank you for visiting my personal website!</p>
                <div className="footer-bottom-right">
                    <p>Built with React, JavaScript, & CSS/HTML</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;