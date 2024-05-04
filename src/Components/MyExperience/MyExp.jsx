import React from 'react';
import './MyExp.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyExp = () => {
    return (
        <div id='myexp' className='myexp'>
            <div className="myexp-title">
                <h1>My Experience</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="myexp-container">
                {mywork_data.map((work, index) => (
                    <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
                        <div className="myexp-item">
                            <img src={work.w_img} alt="" />
                            <div className="myexp-overlay">
                                <p>{work.w_description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="myexp-showmore">
                <a href="https://github.com/ohmp7" target="_blank" rel="noopener noreferrer">
                    <p>Show More</p>
                </a>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyExp;
