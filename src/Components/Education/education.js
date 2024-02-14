import React from "react";
import { Tilt } from 'react-tilt'
import Fade from 'react-reveal/Fade';
import defaultOptions from "../../Utiliy/tiltOptions";
import uniGradeSheet from "../../Images/UniGradeProfile.png"
import uniAwardCert from "../../Images/UniAwardGrade.png"
import collegeAwardCert from "../../Images/CollegeDiploma.png"
import collegeGradeSheet from "../../Images/CollegeGrades.png"
import "./education.css"

const Education = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="education-container">
            <Fade right>
                <div className="education-title-container">
                    <p>Education</p>
                </div>
                <hr className="hr-line" />
            </Fade>

            <div className="education-content-container">
                <Fade left>
                    <div className="education-uni-1-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={uniGradeSheet} alt="uni-grades" />
                        </Tilt>

                    </div>
                </Fade>
                <Fade right>
                    <div className="education-uni-1-text">
                        <p>Complete grade breakdown over complete <br /> study at Robert Gordon's University <br /><br /></p>
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
                </Fade>

                <Fade left>
                    <div className="education-uni-2-text">
                        <p> In the end I margininaly missed the 2:1 grade and achived<br/><br/>
                        Bachelor Of Science w/ 2:2 Honours <br/>In Computer Software Development
                        </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="education-uni-2-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={uniAwardCert} alt="uni-cert" />
                        </Tilt>

                    </div>
                </Fade>

                <Fade left>
                    <div className="education-college-1-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={collegeGradeSheet} alt="college-grades" />
                        </Tilt>
                    </div>
                </Fade>

                <Fade right>
                    <div className="education-college-1-text">
                        <p> Course lasting a total of 2 years and comprising of <br />HNC (year 1) & HND (year 2):
                            <br />
                            <br />
                            Final Grades:
                            <br />
                            Higher National Computing: 2019: <b>C</b>
                            <br />
                            Higher National Diploma: 2021: <b>A</b>
                        </p>
                    </div>
                </Fade>

                <Fade left>
                    <div className="education-college-2-text">
                        <p> A Final grade of <b>A</b> was achived due to the DocKeep application success for the final year's project.
                            <b> Note: Do not hesitate to click on request grades link in the contact-me section if unsure about accuracy of these results</b></p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="education-college-2-image">
                        <Tilt options={defaultOptions} style={{ height: 450, width: 300 }}>
                            <img className="education-image" src={collegeAwardCert} alt="college-cert" />
                        </Tilt>

                    </div>
                </Fade>
                

            </div>
        </div>
    )
})

export default Education;