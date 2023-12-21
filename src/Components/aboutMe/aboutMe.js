import React from "react";
import selfie from "../../Images/selfie.JPEG"
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
                        <p>A fresh 2023's Robert Gordon University graduate, with over 6 months of perfecting his craft in Fullstack development
                            obtained from University, I went an extra mile and expanded my knowladge and gained new skillsets by completing paid online courses such as: ZTM/Codeacademy. Capable of finding solutions to many difficult problems I have encountered when developing
                            three of my projects over years while still improving them with new ideas. Now I belive I'm ready to bring alot of value to <b>{props.orgName}</b> by being self sufficiant developer and having skillset edge over other fresh graduates.
                            <br/><br/>
                            In the future I plan to grow into a loyal Senior devloper at your company, as I often find 
                            myself commiting to one workpace for 3+ years. They say loyality is a halt to your progress in life, I on the other hand
                            belive it is the best way to develop greater understanding of one and be greatfull for what you have.
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