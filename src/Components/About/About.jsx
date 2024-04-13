import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='About'>
            <div className="title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>My name is Ohm Patel, and I am currently a sophomore at the University of Michigan where I am studying computer science. My interest lies in backend, full-stack, and machine learning development. At university, I am a software developer for Atlas Digital Consulting Group, a tech consulting organization where I have worked on several.</p>
                        <p> Currently a sophomore at the University of Michigan where I am studying computer science. My interest lies in backend, full-stack, and machine learning development. At university, I am a software developer for Atlas Digital Consulting Group, a tech consulting organization where I have worked on several.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skills"><p>HTML & CSS</p><hr style={{ width: "75%" }}/></div>
                        <div className="about-skills"><p>REACT JS</p><hr style={{ width: "60%" }}/></div>
                        <div className="about-skills"><p>JavaScript</p><hr style={{ width: "90%" }}/></div>
                        <div className="about-skills"><p>Next JS</p><hr style={{ width: "70%" }}/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About