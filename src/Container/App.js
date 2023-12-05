import {React, Component} from 'react';

import Navigation from '../Components/Navigation/navigation';
import SpashText from '../Components/SpashText/spashText';
import AboutMe from '../Components/AboutMe/aboutMe';
import Projects from '../Components/Projects/projects';
import Education from '../Components/Education/education'
import ContactMe from '../Components/ContactMe/contactMe';

import "./App.css"
import '../fonts/Comfortaa-Medium.ttf'

class App extends Component{
  constructor(){
    super()
    this.state = {
      name: "jakub"
    }
  }

  render(){
    return(
      <div>
        <div className='home-view'>
          <Navigation/>
          <SpashText/>
        </div>
        <div className='about-me-view'>
          <AboutMe/>
        </div>
        <div className='projects-view'>
          <Projects/>
        </div>
        <div className='education-view'>
          <Education/>
        </div>
        <div className='contact-view'>
          <ContactMe/>
        </div>
      </div>
      

    )
  }
}


export default App;
