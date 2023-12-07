import React from "react";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import ScrollAnimation from 'react-animate-on-scroll';
import faceRecogn from "../../Images/FaceRecognitionProject.PNG"
import dockKeep from "../../Images/DK.PNG"

import "./projects.css"

const Projects = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
        <div className="project-container">
            <div className="project-title-container">
                <div className="project-title-text">
                    <p>PROJECTS</p>
                </div>
            </div>
            <div className="project-panel-container">
                <MDBCarousel showControls interval={8000}>
                    <MDBCarouselItem itemId={1} interval={8000}>
                        <img src={faceRecogn} className='d-block w-100' alt='...' />
                        <div className="image-text">
                            <p> Live hosted face recognition website with Signin/Register and <b>email verification </b> functionalites.
                                Users are able to level-up their ranks as they submit more images with human faces on them earining them different emote
                                for each new rank level.
                                On top of that they are able up update their <b>profile Images</b>, change passwords or delete their account.
                                Website makes use of Redis for session managment, Postgres for storing data and <b>AWS Lambda</b> for being awarded
                                new rank emote.
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
                        <img src={dockKeep} id="dockeep-image" className='d-block w-100' alt='...' />
                        <div className="image-text">
                            <h5>DocKeep - Forex Trade documentation App</h5>
                            <p>Installable and deployable forex trade documentation app. Allowing forex a.k.a currency traders to file their trades
                                into an excel spread-sheets with details of each trade such as; traded pair, lot-size, open (price at a time of placing a trade), close (price at a time of closing a trade), profit/loss (calucated amout of gained/lost money for trade), and <b>Chart Images</b> (if any), allowing users to analyze before and after result for each trade on 3 diffrent timeframes of <b>(15m, 1h ,4h)</b>
                            </p>
                        </div>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
           
        </div>
        </ScrollAnimation>
    )
}

export default Projects;