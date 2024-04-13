import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation component
import './Hero.css';
import profile_img from '../../assets/ohmp_prof.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="nav-img"></div> {/* Your image container */}
    <h1>
        <span className="gradient-text">Hi! I'm Ohm Patel,</span>{' '}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'An Aspiring Engineer',
            1500, // wait 1s before replacing "Software Engineer" with "Chef"
            'An Aspiring Dancer',
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
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;