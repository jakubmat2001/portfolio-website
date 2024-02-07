import {React, useState, useEffect } from "react";
import './navigation.css'
import '../../fonts/Comfortaa-Medium.ttf'

const Navigation = ({scrollToSpashText, scrollToAboutMe, scrollToProjects, scrollToContacts, scrollToEducation, clientViewHeight }) => {
    const [lastScrollY, setScrollY] = useState(0)
    const [showNav, setShowNav] = useState(true)
    const [removeShadow, setRemoveShadow] = useState(false)

    useEffect(() => {
        shadowEffect()
        window.addEventListener('scroll', navControl);
        // Removing event listener for scroll, improves performance and prevents memory leakage
        return () => {
            window.removeEventListener('scroll', navControl);
        };
    }, [lastScrollY]);

    // Shows navigation when user scrolls down a page and hides it when they scroll up
    const navControl = () => {
        window.addEventListener("scroll", () => {
            lastScrollY < window.scrollY ? setShowNav(false) : setShowNav(true)
            setScrollY(window.scrollY)
        });
    }

    // Hide the navigation shadow effect if user is at the very top of the webpage
    const shadowEffect = () => {
        window.scrollY <= 100 ? setRemoveShadow(true) : setRemoveShadow(false)
    }

    const handleScrollToSpashText = (e) => {
        e.preventDefault();
        scrollToSpashText();
    }

    const handleClickAbout = (e) => {
        e.preventDefault();  
        scrollToAboutMe();
    };

    const handleClickProjects = (e) => {
        e.preventDefault();  
        scrollToProjects();
    };

    const handleClickEducation = (e) => {
        e.preventDefault();  
        scrollToEducation();
    };

    const handleClickContact = (e) => {
        e.preventDefault();  
        scrollToContacts();
    };


    return (
        <div className={`brand-and-navigation-container ${showNav ? 'visible' : 'hidden'}`}
            style={{ boxShadow: removeShadow ? 'none' : '0px 8px 10px -5px rgba(0, 0, 0, 0.5)' }}>
            <div className="brand-name-container">
                <p id="navigation-logo-text" onClick={handleScrollToSpashText}>J.Matusik</p>
            </div>

            <div className="navigation-container">
                <nav className="navigation">
                    <ul>
                        <li onClick={handleClickAbout}><a href="about">About Me</a></li>
                        <li onClick={handleClickProjects}><a href="projects">Projects</a></li>
                        <li onClick={handleClickEducation}><a href="education">Education</a></li>
                        <li onClick={handleClickContact}><a href="contact-me">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation