import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import faceRecogn from "../../Images/FaceRecognitionProject.png"
import faceRecogn2 from "../../Images/FaceRecognitionProject-2.png"
import QuoteCalculator from "../../Images/QuoteCalculator.png"
import QuoteCalculator2 from "../../Images/QuoteCalculator-2.png"
import dockKeep from "../../Images/DK.png"
import dockKeep2 from "../../Images/DK2.png"
import "./projects.css"

const Projects = React.forwardRef((props, ref) => {
    const [imageLinks, setImageLinks] = useState({
        dockKeep: "",
        quoteCalculator: "",
        faceRecogn: ""
    })

    useEffect(() => {
        setImageLinks({
            dockKeep: "https://github.com/jakubmat2001/DocKeep",
            quoteCalculator: "https://github.com/jakubmat2001/web-systems-coursework",
            faceRecogn: "https://github.com/jakubmat2001/Ai-FaceRecognition-Frontend"
        })
    }, [])

    return (
        <div ref={ref} className="project-container">
            <Fade bottom>
            <div className="project-title-container">
                <div className="project-title-text">
                    <p className="text-colour">PROJECTS</p>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="project-panel-container">
                <MDBCarousel showControls interval={8000}>
                    <MDBCarouselItem itemId={1}>
                        <a href={imageLinks.faceRecogn} target="_blank" rel="noreferrer">
                            <img src={faceRecogn} id="project-images-fd" className='d-block w-100' alt='face-detection webapp snipet' /></a>
                        <div className="image-text">
                            <h5 className="text-colour">Face Detection Web-App - (Dockerized) - (2023)</h5>
                            <p className="text-colour"> Live hosted face recognition website with Signin/Register and <b>email verification </b> functionalites.
                                Users are able to level-up their ranks as they submit more images with human faces on them earining them different emote
                                for each new rank level.
                                On top of that they are able up update their <b>profile Images</b>, change passwords or delete their account.
                                Website makes use of Redis for session managment, Postgres for storing data and <b>AWS Lambda</b> for being awarded
                                new rank emote.
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <a href={imageLinks.faceRecogn} target="_blank" rel="noreferrer">
                            <img src={faceRecogn2} id="project-images-fd" className='d-block w-100' alt='face-detection webapp snipet' /></a>
                        <div className="image-text">
                            <h5 className="text-colour">Face Detection Web-App - (Dockerized) - (2023)</h5>
                            <p className="text-colour"> Live hosted face recognition website with Signin/Register and <b>email verification </b> functionalites.
                                Users are able to level-up their ranks as they submit more images with human faces on them earining them different emote
                                for each new rank level.
                                On top of that they are able up update their <b>profile Images</b>, change passwords or delete their account.
                                Website makes use of Redis for session managment, Postgres for storing data and <b>AWS Lambda</b> for being awarded
                                new rank emote.
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <a href={imageLinks.quoteCalculator} target="_blank" rel="noreferrer">
                            <img src={QuoteCalculator2} id="project-images-qc" className='d-block w-100' alt='quote calculatoer website snipet' /></a>
                        <div className="image-text">
                            <h5 className="text-colour">Quote Calculator Website - (Dockerized) - (2023)</h5>
                            <p className="text-colour"> Website utilizing <b>SSR</b> for better searchability, with <b>MongoDB</b> database for managing data & user sessions. Content on a
                                website can be accessed without a user sign-in, however they won't be able to add/modify/delete their quotes for any given project untill loged into their own account. Each user can create only one quote per project entering inputs such as: hours, expariance, human-resources to calculate final budget. Random fudgefactor is added in and multiplied by budget to prevent reverse engerning the real budget by another project bidder.
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={4}>
                        <a href={imageLinks.quoteCalculator} target="_blank" rel="noreferrer">
                            <img src={QuoteCalculator} id="project-images-qc" className='d-block w-100' alt='quote calculatoer website snipet' /></a>
                        <div className="image-text">
                            <h5 className="text-colour">Quote Calculator Website - (Dockerized) - (2023)</h5>
                            <p className="text-colour"> Website utilizing <b>SSR</b> for better searchability, with <b>MongoDB</b> database for managing data & user sessions. Content on a
                                website can be accessed without a user sign-in, however they won't be able to add/modify/delete their quotes for any given project untill loged into their own account. Each user can create only one quote per project entering inputs such as: hours, expariance, human-resources to calculate final budget. Random fudgefactor is added in and multiplied by budget to prevent reverse engerning the real budget by another project bidder.
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={5}>
                        <a href={imageLinks.dockKeep} target="_blank" rel="noreferrer">
                            <img src={dockKeep2} id="project-images-dk" className='d-block w-100' alt='docKeep software snipet' /></a>
                        <div className="image-text">
                            <h5 className="text-colour">Forex Trade Documentation App - Deployable Software - (2023)</h5>
                            <p className="text-colour">Installable and deployable forex trade documentation app. Allowing forex a.k.a currency traders to file their trades
                                into an excel spread-sheets with details of each trade such as; traded pair, lot-size, open (price at a time of placing a trade), close (price at a time of closing a trade), profit/loss (calucated amout of gained/lost money for trade), and <b>Chart Images</b> (if any), allowing users to analyze before and after result for each trade on 3 diffrent timeframes of <b>(15m, 1h ,4h)</b>
                            </p>
                        </div>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={6}>
                        <a href={imageLinks.dockKeep} target="_blank" rel="noreferrer">
                            <img src={dockKeep} id="project-images-dk" className='d-block w-100' alt='docKeep software snipet' /></a>
                        <div className="image-text">
                            <h5 className="text-colour">Forex Trade Documentation App - Deployable Software - (2021)</h5>
                            <p className="text-colour">Installable and deployable forex trade documentation app. Allowing forex a.k.a currency traders to file their trades
                                into an excel spread-sheets with details of each trade such as; traded pair, lot-size, open (price at a time of placing a trade), close (price at a time of closing a trade), profit/loss (calucated amout of gained/lost money for trade), and <b>Chart Images</b> (if any), allowing users to analyze before and after result for each trade on 3 diffrent timeframes of <b>(15m, 1h ,4h)</b>
                            </p>
                        </div>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
            </Fade>
        </div>
    )
})

export default Projects;