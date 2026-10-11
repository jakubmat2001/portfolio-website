import React from "react";
import selfie from "../../Images/selfie.png"
import './aboutMe.css'

const AboutMe = React.forwardRef((props, navigateAboutMeRef) => {

    const handleClickContact = (e) => {
        e.preventDefault();
        props.scrollToContacts();
    };

    return (
        <div ref={navigateAboutMeRef} className="about-me-container">
            <div className='about-me-wrapper'>
                <div className="about-me-left-container">
                    <div className="about-me-left-content">
                        <p>Hey, Welcome</p>

                        <h2><b>I'm Jakub Matusik</b></h2>
                        <p>As 2023's Robert Gordon University graduate and an employee, I'm more than capable to provide commercial value to <b>{props.orgName}</b> by being self sufficiant and having a good mind for problemsolving. <br/><br/>Possessing a broad range of knowledge across technologies and development practices, including; <b>ReactJs</b>, <b>JavaScript</b>, <b>Java</b>, ,<b>NodeJs</b>, <b>Restful API's</b>, <b>Unit Testing</b>, <b>Integration Testing</b>, <b> CSS + Responsive Web Design</b> I gained extensive hands-on experience with these technologies during my 2+ years at Collabro, where I was heavily exposed to modern software development practices and contributed to a variety of projects.
                        </p>
                        <div className="about-me-button-container">
                            <button onClick={handleClickContact} className="contact-me-button">Contact Me</button>
                        </div>
                    </div>
                </div>
                <div className="about-me-right-container">
                    <img className="my-profile-photo" src={selfie} alt="Me" />
                </div>
            </div>
        </div>
    )
})

export default AboutMe