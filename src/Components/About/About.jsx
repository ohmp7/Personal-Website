import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile_new.jpeg'

const About = () => {
    return (
        <div id='about' className='About'>
            <div className="title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" style={{ maxWidth: "100%", height: "auto" }}/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" className="profile-image" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>My name is Ohm Patel, and I am currently a sophomore at the University of Michigan where I am studying computer science. My interest lies in backend, full-stack, low-level programming, and machine learning development. At university, I am a software developer for Atlas Digital Consulting Group, a tech consulting organization, and a member of the Phi Gamma Nu Professional Business Fraternity.</p>
                        <p> Outside of academics, I enjoy playing Basketball, Pickleball, and Poker with my friends. In addition, I love traveling and trying new experiences with my friends and family! </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Backend</p><hr style={{ width: "75%" }}/></div>
                        <div className="about-skill"><p>Full Stack</p><hr style={{ width: "70%" }}/></div>
                        <div className="about-skill"><p>Cloud</p><hr style={{ width: "60%" }}/></div>
                        <div className="about-skill"><p>ML & Vision</p><hr style={{ width: "70%" }}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>CERTIFICATIONS</p>
                </div>
            </div>
        </div>

    )
}

export default About