import {React, useState, useEffect } from "react";
import './navigation.css'
import '../../fonts/Comfortaa-Medium.ttf'

const Navigation = () => {
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


    const navControl = () => {
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                setShowNav(false)
            } else {
                setShowNav(true)
            }
            setScrollY(window.scrollY)
        });
    }

    const shadowEffect = () => {
        window.scrollY === 0 ? setRemoveShadow(true) : setRemoveShadow(false)
    }

    return (
        <div className={`brand-and-navigation-container ${showNav ? 'visible' : 'hidden'}`}
            style={{ boxShadow: removeShadow ? 'none' : '0px 8px 10px -5px rgba(0, 0, 0, 0.5)' }}>
            <div className="brand-name-container">
                <p>N-Shine</p>
            </div>

            <div className="navigation-container">
                <nav className="navigation">
                    <ul>
                        <li><a href="">About Me</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">This Portfolio</a></li>
                        <li><a href="">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation