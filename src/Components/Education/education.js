import React from "react";
import { Tilt } from 'react-tilt';
import defaultOptions from "../../Utiliy/tiltOptions";
import uniGradeSheet from "../../Images/UniGradeProfile.png";
import uniAwardCert from "../../Images/UniAwardGrade.png";
import "./education.css";

const Education = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="education-container">
            <div className="education-title-container">
                <p>Education</p>
            </div>
            <hr className="hr-line" />
            <div className="education-content-container">
                <div className="education-uni-1-image">
                    <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                        <img className="education-image" src={uniGradeSheet} alt="uni-grades" />
                    </Tilt>
                </div>
                <div className="education-uni-1-text">
                    <p>Image on the left shows University grade breakdown<br /><br /></p>
                </div>
                <div className="education-uni-2-text">
                    <p>Image on the right shows University honours grade breakdown</p>
                </div>
                <div className="education-uni-2-image">
                    <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                        <img className="education-image" src={uniAwardCert} alt="uni-cert" />
                    </Tilt>
                </div>
            </div>
        </div>
    )
})

export default Education;