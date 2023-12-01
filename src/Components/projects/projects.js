import React from "react";
import arrow from "../../Images/ArrowIcon.png"
import "./projects.css"

const Projects = () => {
    return (
        <div className="project-container"> 
            <div className="project-title-container">
                <p>projects</p>
            </div>
            <div className="project-panel-container">
                <div className="left-arrow-container">
                    <a className="left-arrow-image-a"><img className="left-arrow-image" src={arrow}></img> </a>
                </div>
                <div className="project-display-container">
                    <p>project</p>
                </div>
                <div className="right-arrow-container">
                <a className="right-arrow-image-a"><img className="right-arrow-image" src={arrow}></img> </a>
                </div>
            </div>
            <div className="project-text-description-container">
                <p>This project is about blah This project is about blah
                This project is about blah This project is about blah
                This project is about blah This project is about blah
                This project is about blah This project is about blah
                </p>
            </div>
        </div>
    )
}

export default Projects;