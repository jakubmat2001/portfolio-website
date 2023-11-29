import {React, Component} from 'react';

import Navigation from '../Components/navigation/navigation';

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
        <Navigation/>
    )
  }
}


export default App;
