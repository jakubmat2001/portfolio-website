import React from "react";
import { forwardRef } from "react";
// import Fade from 'react-reveal/Fade';
// import selfie from "./selfie.png";
import './aboutMe.css'
const Fade = require("react-reveal/Fade")
const selfie = require("./selfie.png")


type AboutMe = {
    orgName: string,
    scrollToContacts: () => void
}

const AboutMe = forwardRef<HTMLDivElement, AboutMe>((props, ref) => {

    const handleClickContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.scrollToContacts();
    };

    return (

        <div ref={ref} className="about-me-container">
            <div className='about-me-wrapper'>
                <Fade right>
                    <div className="about-me-left-container">
                        <div className="about-me-left-content">
                            <p>Hey, Welcome</p>
                            <h2><b>I'm Jakub Matusik</b></h2>
                            <p>A fresh 2023's Robert Gordon University graduate, with over 6 months of perfecting his craft in Fullstack development & Software.
                                I went an extra mile through expanding my knowladge and gained new skillsets by completing paid online courses such as: ZTM & Codeacademy. Skilled at resolving complex challenges encountered during the development of three key projects, continually enhancing them with innovative ideas and features. I believe I can contribute significant value to <b>{props.orgName}</b> by being self sufficiant developer and possesing noteworthy skillset in web development. <br /><br />Possessing ranging knowladge in domains such as; <b>React</b>,  <b>Java Script</b>,  <b>Python</b>,  <b>TypeScript</b>,  <b>NodeJS</b>,  <b>Docker</b>,  <b>PostgreSQL</b>,  <b>Express</b>,  <b>MongoDB</b>,  <b>Redis</b>, <b>Restful API's</b>,  <b>AWS Lambda</b>,  <b>Git</b>,  <b>NLP - Natural Language Processing</b>,  <b>Unit Testing</b>, 
                                 <b> CSS + Responsive Web Design</b>
                                <br /><br />
                            </p>

                            <div className="about-me-button-container">
                                <button onClick={handleClickContact} className="contact-me-button">Contact Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="about-me-right-container">
                        <img className="my-profile-photo" src={selfie} alt="My Photo" />
                    </div>
                </Fade>
            </div>
        </div>
    )
})

export default AboutMe