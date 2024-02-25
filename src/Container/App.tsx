import React, { useState, useRef, useEffect } from 'react';

// Import components
import Navigation from '../Components/navigation/navigation';
import SplashText from '../Components/spashText/splashText';
import AboutMe from '../Components/aboutMe/aboutMe';
import Projects from '../Components/projects/projects';
import Education from '../Components/Education/education';
import ContactMe from '../Components/contactMe/contactMe';
import Modal from "../Components/Modal/modal";
import RequestGrades from '../Components/requestGrades/requestGrades';
import PopUp from '../Components/popUp/popUp';
import DirectContact from '../Components/directContact/directContact';

import "./App.css";
import '../fonts/Comfortaa-Medium.ttf';

type View = {
  viewHeight: number,
}

type Organization = {
  orgName: string,
}

type ModalView = {
  isRequestGradesOpen?: boolean,
  isDirectContactOpen?: boolean,
  isPopUpOpen?: boolean
}

const App = () => {
  // State hooks
  const [clientViewHeight, setClientViewHeight] = useState<View>({ viewHeight: 0 });
  const [orgName, setOrgName] = useState<Organization>({ orgName: 'your company' });
  const [modalOpen, setModalOpen] = useState<ModalView>({
    isRequestGradesOpen: false,
    isDirectContactOpen: false,
    isPopUpOpen: false
  });

  const name = "Jakub";
  const navigateSpashTextRef = useRef<HTMLDivElement>(null);
  const navigateAboutMeRef = useRef<HTMLDivElement>(null);
  const navigateProjectsRef = useRef<HTMLDivElement>(null);
  const navigateEducationRef = useRef<HTMLDivElement>(null);
  const navigateContactMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setModalOpen({ isPopUpOpen: true });
    }, 1500);
  }, []);

  // Scroll functions
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleRequestGrades = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault(); 
    setModalOpen(prevState => ({ ...prevState, isRequestGradesOpen: !prevState.isRequestGradesOpen }));
  };
  
  const toggleDirectContact = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault(); 
    setModalOpen(prevState => ({ ...prevState, isDirectContactOpen: !prevState.isDirectContactOpen }));
  };
  


  return (
    <div id='page-view-height'>
      {modalOpen.isRequestGradesOpen &&
        <Modal>
          <RequestGrades toggleRequestGrades={toggleRequestGrades} />
        </Modal>}
      {modalOpen.isPopUpOpen &&
        <Modal>
          <PopUp togglePopUp={(e: { preventDefault: () => void; }) => { e.preventDefault(); setModalOpen(prevState => ({ ...prevState, isPopUpOpen: !prevState.isPopUpOpen })); }} handleChangeText={setOrgName} />
        </Modal>}
      {modalOpen.isDirectContactOpen &&
        <Modal>
          <DirectContact toggleDirectContact={(e: { preventDefault: () => void; }) => { e.preventDefault(); setModalOpen(prevState => ({ ...prevState, isDirectContactOpen: !prevState.isDirectContactOpen })); }} />
        </Modal>}
      <div className='home-view'>
        <Navigation
          scrollToSpashText={() => scrollTo(navigateSpashTextRef)}
          scrollToAboutMe={() => scrollTo(navigateAboutMeRef)}
          scrollToProjects={() => scrollTo(navigateProjectsRef)}
          scrollToContacts={() => scrollTo(navigateContactMeRef)}
          scrollToEducation={() => scrollTo(navigateEducationRef)}
          clientViewHeight={clientViewHeight}
        />
        <SplashText name={name} ref={navigateSpashTextRef} />
      </div>
      <AboutMe ref={navigateAboutMeRef} orgName={orgName.orgName} scrollToContacts={() => scrollTo(navigateContactMeRef)} />
      <Projects ref={navigateProjectsRef} />
      <Education ref={navigateEducationRef} />
      <ContactMe ref={navigateContactMeRef} toggleRequestGrades={toggleRequestGrades} 
        toggleDirectContact={toggleDirectContact} />
    </div>
  );
};

export default App;
