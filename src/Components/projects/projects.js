import React from "react";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import "./projects.css"

const Projects = () => {
    return (
        <div className="project-container">
            <div className="project-title-container">
                <div className="project-title-text">
                    <p>PROJECTS</p>
                </div>
            </div>
            <div className="project-panel-container">
                <MDBCarousel showControls interval={500000}>
                    <MDBCarouselItem itemId={1} interval={500000}>
                        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                        <div className="image-text">
                            <p>This porject is about blahanal, reinventing something natural, even tho this doesnt owrk  it kinda does as
                                its wrapping my works as I asked it to do, so thats great
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
                        <div className="image-text">
                            <p>This porject is about blahanal, reinventing something natural, even tho this doesnt owrk  it kinda does as
                                its wrapping my works as I asked it to do, so thats great
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                        <div className="image-text">
                            <p>This porject is about blahanal, reinventing something natural, even tho this doesnt owrk  it kinda does as
                                its wrapping my works as I asked it to do, so thats great, This porject is about blahanal, reinventing something natural, even tho this doesnt owrk  it kinda does as its wrapping my works as I asked it to do, so thats great
                            </p>
                        </div>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
           
        </div>
    )
}

export default Projects;