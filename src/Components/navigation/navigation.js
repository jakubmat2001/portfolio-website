import { React, useState, useEffect } from "react";
import './navigation.css'
import '../../fonts/Comfortaa-Medium.ttf'

const Navigation = ({ scrollToSpashText, scrollToAboutMe, scrollToProjects, scrollToContacts, scrollToEducation, clientViewHeight }) => {
    const [showNav, setShowNav] = useState(true)
    const [scrollWindow, setScrollWindow] = useState({
        y: 0,
        lastY: 0
    })


    useEffect(() => {
        const handleScroll = () => {
            setScrollWindow(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

    useEffect(() => {
        if (scrollWindow.y > 100){
            setShowNav(true)
        }else {
            setShowNav(false)
        }

        if (scrollWindow.y > scrollWindow.lastY){
            setShowNav(true)
        }else {
            setShowNav(false)
        }

    }, [scrollWindow])


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
        <div className={`brand-and-navigation-container ${showNav ? "hidden" : "visible"}`}>
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