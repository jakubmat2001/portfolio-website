import { useState, useRef, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import Navigation from '../Components/navigation/navigation';
import SpashText from '../Components/spashText/spashText';
import AboutMe from '../Components/aboutMe/aboutMe';
import Education from '../Components/Education/education';
import ContactMe from '../Components/ContactMe/contactMe';
import Modal from "../Components/Modal/modal";
import PopUp from '../Components/PopUp/popUp';
import DirectContact from '../Components/DirectContact/directContact';
import WorkExperience from '../Components/WorkExperience/WorkExperience';
import Projects from '../Components/projects/projects';
import '../fonts/Comfortaa-Medium.ttf';
import "./App.css";

const App = () => {
  const [clientViewHeight, setClientViewHeight] = useState(0);
  const [name] = useState("Visitor");
  const [orgName, setOrgName] = useState('your company');
  const [modalOpen, setModalOpen] = useState({
    isDirectContactOpen: false,
    isPopUpOpen: false
  })

  const navigateSpashTextRef = useRef(null);
  const navigateAboutMeRef = useRef(null);
  const navigateProjectsRef = useRef(null);
  const navigateEducationRef = useRef(null);
  const navigateContactMeRef = useRef(null);
  const navigateWorkRef = useRef(null);

  // TODO Using the height of the client, get the height of individual components 
  // and use them to determine when the viewport switches from one to the other
  const clientWindowHeight = useRef(null)

  useEffect(() => {
    scrollToTop();
    if (clientWindowHeight.current) {
      setClientViewHeight(clientWindowHeight.current.clientHeight);
    }
    setTimeout(() => {
      setModalOpen({ isPopUpOpen: true })
    }, 1500)
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);
  

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

  const scrollToWork = () => {
    navigateWorkRef.current.scrollIntoView({ behavior: 'smooth' });
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
  };

  const handleChangeText = (text) => {
    setOrgName(text);
  };

  return (
    <div id='page-view-height' ref={clientWindowHeight}>
      {modalOpen.isPopUpOpen &&
        <Modal>
          <PopUp togglePopUp={togglePopUp} handleChangeText={handleChangeText} />
        </Modal>}
      {modalOpen.isDirectContactOpen &&
        <Modal>
          <DirectContact toggleDirectContact={toggleDirectContact} />
        </Modal>}
      <div className='home-view' ref={navigateSpashTextRef}>
        <Navigation
          scrollToSpashText={scrollToSpashText}
          scrollToAboutMe={scrollToAboutMe}
          scrollToProjects={scrollToProjects}
          scrollToContacts={scrollToContacts}
          scrollToEducation={scrollToEducation}
          scrollToWork={scrollToWork}
          clientViewHeight={clientViewHeight}
        />
        <Fade triggerOnce>
          <SpashText name={name} />
        </Fade>
      </div>
      <div className='about-me-view' ref={navigateAboutMeRef}>
        <Fade triggerOnce>
          <AboutMe orgName={orgName} scrollToContacts={scrollToContacts} />
        </Fade>
      </div>
      <div className='work-experience-view' ref={navigateWorkRef}>
        <Slide triggerOnce>
          <WorkExperience />
        </Slide>
      </div>
      <div className='projects-view' ref={navigateProjectsRef}>
        <Slide direction='right' triggerOnce>
          <Projects />
        </Slide>
      </div>
      <div className='education-view' ref={navigateEducationRef}>
        <Fade triggerOnce>
          <Education />
        </Fade>
      </div>
      <div className='contact-view' ref={navigateContactMeRef}>
        <ContactMe toggleDirectContact={toggleDirectContact} />
      </div>
    </div>
  );
};

export default App;

