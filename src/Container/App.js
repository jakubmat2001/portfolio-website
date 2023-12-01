import {React, Component} from 'react';

import Navigation from '../Components/navigation/navigation';
import SpashText from '../Components/spashText/spashText';
import AboutMe from '../Components/aboutMe/aboutMe';
import Projects from '../Components/projects/projects';

import "./App.css"

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
      </div>
      

    )
  }
}


export default App;
