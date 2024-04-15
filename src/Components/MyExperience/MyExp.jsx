import React from 'react'
import './MyExp.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyExp = () => {
    return (
        <div className='myexp'>
            <div className="myexp-title">
                <h1>My Experience</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="myexp-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="myexp-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyExp