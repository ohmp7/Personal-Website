import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation component
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const resumeLink = 'https://drive.google.com/file/d/1IVwkZ_VseUPFQvMaWKJOmKSywBS56yTy/view?usp=sharing';
  return (
    <div id='home' className='hero'>
      <div className="nav-img"></div> 
      <h1>
        <span className="gradient-text">Hi! I'm Ohm Patel,</span>{' '}
        <TypeAnimation
          sequence={[
            'An Aspiring Engineer',
            1500,
            'An Aspiring Programmer',
            1500,
            'An Aspiring Entrepreneur',
            1500,
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
        {/* Properly set the href attribute to the resume link and provide visible text content */}
        <div className="hero-resume"><a href={resumeLink} target="_blank" rel="noopener noreferrer">My resume</a></div>
      </div>
    </div>
  );
}

export default Hero;
