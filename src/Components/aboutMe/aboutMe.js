import React from "react";
import selfie from "../../Images/selfie.JPEG"
import './aboutMe.css'

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <wrapper className='about-me-wrapper'>
                <div className="about-me-left-container">
                    <div className="about-me-left-content">
                        <p>Hey, Welcome</p>

                        <h2><b>I'm Jakub Matusik</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Lectus arcu bibendum at varius vel. Eleifend donec pretium vulputate sapien nec sagittis. Amet justo donec enim diam vulputate ut pharetra sit amet. Viverra nam libero justo laoreet sit amet cursus sit. Quis lectus nulla at volutpat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Est ante in nibh mauris cursus mattis molestie. Vitae congue eu consequat ac felis donec et odio pellentesque. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Pellentesque elit eget gravida cum sociis. Pretium vulputate sapien nec sagittis. Quis eleifend quam adipiscing vitae. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Tellus elementum sagittis vitae et. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Massa tempor nec feugiat nisl pretium fusce id velit ut. Leo a diam sollicitudin tempor id eu nisl nunc. Sed felis eget velit aliquet sagittis id consectetur purus ut.
                        </p>
                        <button className="contact-me-button">Contact Me</button>
                    </div>
                </div>
                <div className="about-me-right-container">
                    <img className="my-profile-photo" src={selfie} alt="Me" />
                </div>
            </wrapper>
        </div>
    )
}

export default AboutMe