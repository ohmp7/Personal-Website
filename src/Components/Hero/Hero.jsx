import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation component
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="nav-img"></div> 
    <h1>
        <span className="gradient-text">Hi! I'm Ohm Patel,</span>{' '}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'An Aspiring Engineer',
            1500, // wait 1s before replacing "Software Engineer" with "Chef"
            'An Aspiring Programmer',
            1500,
            'An Aspiring Entrepreneur',
            1500,
            // Add more text variations here
          ]}
          wrapper="span"
          speed={250}
          style={{ fontSize: 'inherit', display: 'inline-block' }}
          repeat={Infinity}
        />
      </h1>
      <p>I am a computer science engineering student at the University of Michigan and am from the Greater Philadelphia Area. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={0} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
