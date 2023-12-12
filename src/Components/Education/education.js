import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Tilt } from 'react-tilt'
import defaultOptions from "../../Utiliy/tiltOptions";
import uniGradeSheet from "../../Images/UniGradeProfile.PNG"
import uniAwardCert from "../../Images/UniAwardGrade.PNG"
import collegeAwardCert from "../../Images/CollegeDiploma.png"
import collegeGradeSheet from "../../Images/CollegeGrades.png"
import "./education.css"



const Education = React.forwardRef((props, ref) => {

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div ref={ref} className="education-container">
                <div className="education-title-container">
                    <p>Education</p>
                </div>
                <hr className="hr-line" />
                <div className="education-content-container">
                    <div className="education-uni-1-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={uniGradeSheet} alt="uni-grades"/>
                        </Tilt>

                    </div>
                    <div className="education-uni-1-text">
                        <p>Complete grade breakdown over complete <br/> study at Robert Gordon's University <br /><br /></p>
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
                        <p> Factors like full-time employment to support myself and lack of student loans contributed to achiving lower grade potential then as planned such as a <b>B</b> in my honours. It hasn't helped that I tend to be overly ambitious with my projects (more on that during the interview) and more ofthen then not I come up with projects ideas that could serve me in the future such as a DocKeep project for my college HND course which
                        I achived an <b>A</b> in. Still remebering my previous success with DocKeep, I felt confident I could replicate that success with Forex-Article-Sentiment-Analyzer (Honours Project). In the end a <b>C</b> grade was achived which yielded an end 
                        result of <b>2:2</b> in honours grade.
                        </p>
                    </div>
                    <div className="education-uni-2-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={uniAwardCert} alt="uni-cert"/>
                        </Tilt>

                    </div>
                    <div className="education-college-1-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={collegeGradeSheet} alt="college-grades"/>
                        </Tilt>
                    </div>
                    <div className="education-college-1-text">
                        <p> Course lasting a total of 2 years and comprising of <br/>HNC (year 1) & HND (year 2):
                            <br />
                            <br />
                            Final Grades:
                            <br />
                            Higher National Computing: 2019: <b>C</b>
                            <br />
                            Higher National Diploma: 2021: <b>A</b>
                        </p>
                    </div>

                    <div className="education-college-2-text">
                        <p> A Final grade of <b>A</b> was achived due to the DocKeep application success for the final year's project </p>
                    </div>
                    <div className="education-college-2-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={collegeAwardCert} alt="college-cert"/>
                        </Tilt>

                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
})

export default Education;