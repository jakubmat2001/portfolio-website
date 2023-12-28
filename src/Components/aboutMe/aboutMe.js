import React from "react";
import selfie from "../../Images/selfie.jpeg"
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
                        <p>A fresh 2023's Robert Gordon University graduate, with over 6 months of perfecting his craft in Fullstack development & Software.
                            I went an extra mile through expanding my knowladge and gained new skillsets by completing paid online courses such as: ZTM & Codeacademy. Capable of finding solutions to many difficult problems encountered when developing
                            three of my projects, while still improving them with new ideas & features. After overcomming my impostor syndrom, I've regained my confidance and belive to be ready by brigning alot of value to <b>{props.orgName}</b> by being self sufficiant developer and having skillset edge over other fresh graduates. <br/><br/>Possessing ranging knowladge in domains such as; <b>React</b>, <b>JS</b>, <b>Python</b>, <b>Node</b>, <b>Docker</b>, <b>PostgreSQL</b>, <b>Express</b>, <b>MongoDB</b>, <b>Redis</b>, <b>Restful API's</b>, <b>AWS Lambda</b>, <b>AWS S3 Bucket</b>, <b>Git</b>, <b>NLP - Natural Language Processing</b>, <b>Unit Testing</b>, 
                            <b> CSS + Responsive Web Design</b>
                            <br /><br />
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