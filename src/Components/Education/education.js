import React from "react";
import filler from "../../Images/s-l400.jpg"
import uniGradeSheet from "../../Images/UniGradeProfile.PNG"
import uniAwardCert from "../../Images/UniAwardGrade.PNG"
import ScrollAnimation from 'react-animate-on-scroll';
import "./education.css"



const Education = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className="education-container">
                <div className="education-title-container">
                    <p>Education</p>
                </div>
                <div className="education-content-container">
                    <div className="education-uni-1-image">
                        <img className="education-image" src={uniGradeSheet} />
                    </div>
                    <div className="education-uni-1-text">
                        <p> Grade Break Down:
                            <br />
                            A: 1
                            <br />
                            B: 6
                            <br />
                            C: 5
                            <br />
                            D: 2
                        </p>
                    </div>
                    <div className="education-uni-2-text">
                        <p> Factors like full-time employment to support myself and lack of student loans contributed to me achiving lower grade potential then planned such as a <b>B</b> in my honours. It hasn't helped that I tend to be overly ambitious with my projects and more ofthen then not I come up with projects ideas that could serve me in the future such as a DocKeep project for my college HND couse which 
                        I achived an <b>A</b> in. Still remebering my previous success with DocKeep, I felt confident I could replicate that success with
                        Forex-Article-Sentiment-Analyzer (Honours Project). In the end a <b>C</b> grade was achived which yielded an end result <b>2:2</b>
                        honours grade.
                        </p>
                    </div>
                    <div className="education-uni-2-image">
                        <img className="education-image" src={uniAwardCert} />
                    </div>
                    <div className="education-college-1-image">
                        <img className="education-image" src={filler} />
                    </div>
                    <div className="education-college-1-text">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam. Feugiat nisl pretium fusce id velit ut tortor. Massa tincidunt dui ut ornare lectus sit amet. At augue eget arcu dictum varius duis at consectetur lorem. </p>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Education;