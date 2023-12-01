import React from "react";
import selfie from "../../Images/selfie.JPEG"
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <wrapper className='about-me-wrapper'>
                <div className="about-me-left-container">
                    <p>Hey, Welcome</p>

                    <h2><b>I'm Jakub Matusik</b></h2>
                    <p>Over the years I created many wepsites,
                        Which have been know for it's responsivnes and
                        user reusability day and night, note that his is
                        just the filler text and it will be edited, when
                        the complete layout of the website is finished with it
                    </p>

                    <button className="contact-me-button">Contact Me</button>
                </div>
                <div className="about-me-right-container">
                    <img className="my-profile-photo" src={selfie} alt="Me"/>
                </div>
            </wrapper>
        </div>
    )
}

export default AboutMe