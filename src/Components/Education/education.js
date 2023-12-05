import React from "react";
import "./education.css"
import filler from "../../Images/s-l400.jpg"

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-title-container">
                <p>Education</p>
            </div>
            <div className="education-content-container">
                <div className="university-image">
                    <img src={filler}/>
                </div>
                <div className="university-text">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam. Feugiat nisl pretium fusce id velit ut tortor. Massa tincidunt dui ut ornare lectus sit amet. At augue eget arcu dictum varius duis at consectetur lorem. </p>
                </div>
                <div className="college-text">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam. Feugiat nisl pretium fusce id velit ut tortor. Massa tincidunt dui ut ornare lectus sit amet. At augue eget arcu dictum varius duis at consectetur lorem. </p>
                </div>
                <div className="college-image">
                    <img src={filler}/>
                </div>
            </div>
        </div>
    )
}

export default Education;