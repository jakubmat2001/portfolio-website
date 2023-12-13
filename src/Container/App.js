import React, { useState, useRef, useEffect } from 'react';

import Navigation from '../Components/Navigation/navigation';
import SpashText from '../Components/SpashText/spashText';
import AboutMe from '../Components/AboutMe/aboutMe';
import Projects from '../Components/Projects/projects';
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
    }, 1200)
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
          <RequestGrades toggleModal={toggleRequestGrades} />
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
        <SpashText name={name} ref={navigateSpashTextRef}/>
      </div>
      <div className='about-me-view'>
        <AboutMe ref={navigateAboutMeRef} orgName={orgName} scrollToContacts={scrollToContacts}/>
      </div>
      <div className='projects-view'>
        <Projects ref={navigateProjectsRef} />
      </div>
      <div className='education-view'>
        <Education ref={navigateEducationRef} />
      </div>
      <div className='contact-view'>
        <ContactMe ref={navigateContactMeRef} toggleModal={toggleRequestGrades} />
      </div>
    </div>
  );
};

export default App;

