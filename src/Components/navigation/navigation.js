import React from "react";
import './navigation.css'

const Navigation = () => {

    return (
        <div className="brand-and-navigation-container">

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