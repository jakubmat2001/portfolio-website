import React, { useEffect, useState } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';
import workEntrace from '../../Images/workEntrance.png';
import workWebsite from '../../Images/workWebsite.png';
import './WorkExperience.css';
import dayjs from 'dayjs';

const WorkExperience = React.forwardRef((props, ref) => {
     const [imageLinks, setImageLinks] = useState({
          workWebsite: "",
     })

     // TODO create a reusable img component which returns link with an image
     useEffect(() => {
          setImageLinks({
               workWebsite: "https://collabro-group.com/",
          })
     }, [])

     return (
          <div className="work-experience-container" ref={ref}>
               <div id='work-experience-body'>
                    <header className='work-experience-header'>
                         Work Experience
                    </header>
                    <div className="work-experience-wrapper">
                         <section className='work-experience-content'>
                              <p>Employed as a Junior Software Engineer since <b>23/07/2024</b> to this day (<b>{dayjs().format('DD/MM/YYYY')}</b>).
                                   Daily responsibilites consist of attending daily morning standup calls, working on featrues improving applications used by our clients such as;
                                   API integrations, functionaliy improvments and more; resolving application related client raised issues; writing unit/integration test coverage;
                                   deploying applications into test envirnoments and production environments once approval has been granted.</p>
                         </section>
                         <section className='work-experience-content'>
                              <MDBCarousel showControls interval={8000}>
                                   <MDBCarouselItem itemId={1}>
                                        <div id='work-image-container'>
                                             <img src={workEntrace} id="project-images-fd" className='d-block w-100' alt='workplace webapp snipet' />
                                        </div>
                                        <MDBCarouselCaption>
                                             <h5>Collabro Office</h5>
                                             <p>Front entrace to the building where Collabro office is located</p>
                                        </MDBCarouselCaption>
                                   </MDBCarouselItem>
                                   <MDBCarouselItem itemId={2}>
                                        <div id='work-image-container'>
                                             <a href={imageLinks.workWebsite} target="_blank" rel="noreferrer">
                                                  <img src={workWebsite} id="project-images-fd" className='d-block w-100' alt='website webapp snipet' /></a>
                                             <MDBCarouselCaption>
                                                       <h5>Collabro Website</h5>
                                                       <p>Click here to visit Collabro's website and find out more</p>
                                             </MDBCarouselCaption>
                                        </div>
                                   </MDBCarouselItem>
                              </MDBCarousel>
                         </section>
                    </div>
               </div>
          </div>
     )
})


export default WorkExperience;