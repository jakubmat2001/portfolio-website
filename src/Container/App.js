import React, { useState, useRef, useEffect } from 'react';

import Navigation from '../Components/Navigation/navigation';
import SpashText from '../Components/SpashText/spashText';
import AboutMe from '../Components/AboutMe/aboutMe';
import Projects from '../Components/Projects/projects';
import Education from '../Components/Education/education';
import ContactMe from '../Components/ContactMe/contactMe';

import "./App.css";
import '../fonts/Comfortaa-Medium.ttf';

const App = () => {
  const [name] = useState("Jakub");
  const [clientViewHeight, setClientViewHeight] = useState(0);
  const [aboutMeViewHeight, setAboutMeViewHeight] = useState(0);

  const navigateAboutMeRef = useRef(null);
  const navigateProjectsRef = useRef(null);
  const navigateEducationRef = useRef(null);
  const navigateContactMeRef = useRef(null);

  // Future dev: Using the height of the client, get the height of individual components 
  // and use them to determine when the viewport switches from one to the other
  const clientWindowHeight = useRef(null)

  useEffect(() => {
    if (clientWindowHeight.current) {
      setClientViewHeight(clientWindowHeight.current.clientHeight);
      setAboutMeViewHeight(navigateAboutMeRef.current.clientHeight);
      console.log(aboutMeViewHeight)
    }
  }, []);

  const scrollToAboutMe = () => {
    navigateAboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    navigateProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacts = () => {
    navigateContactMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEducation = () => {
    navigateEducationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='page-view-height' ref={clientWindowHeight}>
      <div className='home-view'>
        <Navigation
          scrollToAboutMe={scrollToAboutMe}
          scrollToProjects={scrollToProjects}
          scrollToContacts={scrollToContacts}
          scrollToEducation={scrollToEducation}
          clientViewHeight={clientViewHeight}
        />
        <SpashText name={name} />
      </div>
      <div className='about-me-view'>
        <AboutMe ref={navigateAboutMeRef} />
      </div>
      <div className='projects-view'>
        <Projects ref={navigateProjectsRef} />
      </div>
      <div className='education-view'>
        <Education ref={navigateEducationRef} />
      </div>
      <div className='contact-view'>
        <ContactMe ref={navigateContactMeRef} />
      </div>
    </div>
  );
};

export default App;

