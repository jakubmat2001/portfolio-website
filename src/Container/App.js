import React, { useState, useRef, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import Navigation from '../Components/navigation/navigation';
import SpashText from '../Components/spashText/spashText';
import AboutMe from '../Components/aboutMe/aboutMe';
import Projects from '../Components/projects/projects';
import Education from '../Components/Education/education';
import ContactMe from '../Components/ContactMe/contactMe';
import Modal from "../Components/Modal/modal";
import RequestGrades from '../Components/RequestGrades/requestGrades'
import PopUp from '../Components/PopUp/popUp';

import "./App.css";
import '../fonts/Comfortaa-Medium.ttf';

const App = () => {
  const [name] = useState("Jakub");
  const [clientViewHeight, setClientViewHeight] = useState(0);
  const [aboutMeViewHeight, setAboutMeViewHeight] = useState(0);
  const [isRequestGradesOpen, setIsRequestGradesOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [orgName, setOrgName] = useState('your company');

  const navigateSpashTextRef = useRef(null);
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
    }
    setTimeout(() => {
      setIsPopUpOpen(true)
    }, 1500)
  }, []);

  const scrollToSpashText = () => {
    navigateSpashTextRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  // Toggle the grades modal from closed/open => open/close anytime function triggers
  const toggleRequestGrades = (e) => {
    setIsRequestGradesOpen(isRequestGradesOpen => !isRequestGradesOpen)
    e.preventDefault()
  }
  // Toggle the pop-up modal from closed/open => open/close anytime function triggers
  const togglePopUp = (e) => {
    setIsPopUpOpen(isPopUpOpen => !isPopUpOpen)
    e.preventDefault()
  }

  // Changes text on the website from a popUp form input value
  const handleChangeText = (text) => {
    setOrgName(text);
  }

  return (
    <div id='page-view-height' ref={clientWindowHeight}>
      {isRequestGradesOpen &&
        <Modal >
          <RequestGrades toggleRequestGrades={toggleRequestGrades} />
        </Modal>}
      {isPopUpOpen &&
        <Modal>
          <PopUp togglePopUp={togglePopUp} handleChangeText={handleChangeText} />
        </Modal>}
      <div className='home-view'>
        <Navigation
          scrollToSpashText={scrollToSpashText}
          scrollToAboutMe={scrollToAboutMe}
          scrollToProjects={scrollToProjects}
          scrollToContacts={scrollToContacts}
          scrollToEducation={scrollToEducation}
          clientViewHeight={clientViewHeight}
        />
        <Fade top>
          <SpashText name={name} ref={navigateSpashTextRef} />
        </Fade>
      </div>
      <div className='about-me-view'>
        <Fade left>
          <AboutMe ref={navigateAboutMeRef} orgName={orgName} scrollToContacts={scrollToContacts} />
        </Fade>
      </div>
      <div className='projects-view'>
        <Fade right>
          <Projects ref={navigateProjectsRef} />
        </Fade>
      </div>
      <div className='education-view'>
      <Fade left>
          <Education ref={navigateEducationRef} />
      </Fade>
      </div>
      <div className='contact-view'>
        <ContactMe ref={navigateContactMeRef} toggleModal={toggleRequestGrades} />
      </div>
    </div>
  );
};

export default App;

