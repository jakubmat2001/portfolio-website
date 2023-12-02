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
                <div className="project-text-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui nunc. Id interdum velit laoreet id donec ultrices. Ultrices in iaculis nunc sed augue. Tempor id eu nisl nunc mi ipsum faucibus vitae.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;