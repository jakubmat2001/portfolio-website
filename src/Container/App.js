import React, { useState, useRef, useEffect } from 'react';

import Navigation from '../Components/navigation/navigation';
import SpashText from '../Components/spashText/spashText';
import AboutMe from '../Components/aboutMe/aboutMe';
import Projects from '../Components/projects/projects';
import Education from '../Components/Education/education';
import ContactMe from '../Components/contactMe/contactMe';
import Modal from "../Components/Modal/modal";
import RequestGrades from '../Components/requestGrades/requestGrades'
import PopUp from '../Components/popUp/popUp';
import DirectContact from '../Components/directContact/directContact';

import "./App.css";
import '../fonts/Comfortaa-Medium.ttf';

const App = () => {
  const [clientViewHeight, setClientViewHeight] = useState(0);
  const [name] = useState("Jakub");
  const [orgName, setOrgName] = useState('your company');
  const [modalOpen, setModalOpen] = useState({
    isRequestGradesOpen: false,
    isDirectContactOpen: false,
    isPopUpOpen: false
  })

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
    }
    setTimeout(() => {
      setModalOpen({ isPopUpOpen: true })
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
    setModalOpen((prevState) => ({
      ...prevState,
      isRequestGradesOpen: !prevState.isRequestGradesOpen
    }));
    e.preventDefault();
  };

  const togglePopUp = (e) => {
    setModalOpen((prevState) => ({
      ...prevState,
      isPopUpOpen: !prevState.isPopUpOpen
    }));
    e.preventDefault();
  };

  const toggleDirectContact = (e) => {
    setModalOpen((prevState) => ({
      ...prevState,
      isDirectContactOpen: !prevState.isDirectContactOpen
    }))
    e.preventDefault();
  }

  // Changes text on the website from a popUp form input value
  const handleChangeText = (text) => {
    setOrgName(text);
  }

  return (
    <div id='page-view-height' ref={clientWindowHeight}>
      {modalOpen.isRequestGradesOpen &&
        <Modal >
          <RequestGrades toggleRequestGrades={toggleRequestGrades} />
        </Modal>}
      {modalOpen.isPopUpOpen &&
        <Modal>
          <PopUp togglePopUp={togglePopUp} handleChangeText={handleChangeText} />
        </Modal>}
      {modalOpen.isDirectContactOpen &&
        <Modal>
          <DirectContact toggleDirectContact={toggleDirectContact}/>
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
          <SpashText name={name} ref={navigateSpashTextRef} />
      </div>
      <div className='about-me-view'>
          <AboutMe ref={navigateAboutMeRef} orgName={orgName} scrollToContacts={scrollToContacts} />
      </div>
      <div className='projects-view'>
          <Projects ref={navigateProjectsRef} />
      </div>
      <div className='education-view'>
          <Education ref={navigateEducationRef} />
      </div>
      <div className='contact-view'>
        <ContactMe ref={navigateContactMeRef} toggleRequestGrades={toggleRequestGrades} toggleDirectContact={toggleDirectContact} />
      </div>
    </div>
  );
};

export default App;

