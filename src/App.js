import React, { Component } from 'react';
import './css/App.css';
import AppOutput from './AppOutput';
import AppInput from './AppInput';


// in a stateful component render the components responsible for the application and manage its state
class App extends Component {
  // in the constructor include the state as an empty string, which is populated with the value of the pressed button, to be included in the output area
  // bind also the methods which are used to update the state and passed as properties to child components
  constructor(props) {
    super(props);
    this.state = {
      output: ''
    };
    // handle input called in answer to a click event on one of the clickable elements
    this.handleInput = this.handleInput.bind(this);
    // handle stroke called whenever a key among one of the chosen one is pressed
    this.handleStroke = this.handleStroke.bind(this);
  }

  // handleInput receives a click event as argument and updates the state with the text value of the interacting button
  // additionally, it plays the audio for the connected button
  handleInput(e) {
    let target = e.target;
    let output = target.textContent;

    this.playAudio(target);

    this.setState({
      output: output
    });
  }

  // add an event listener on the entire window once the components are included in the page
  // listen for a keydown event, at which point call a function to update the state
  componentDidMount() {
    window.addEventListener("keydown", this.handleStroke);
  }

  // create a function which updates the state if the key pressed matches one of the chosen one
  handleStroke(e) {
    // e.keycode is an integer
    // String.fromChartCode() returns the character matching the code
    // toUpperCase to have the elements assuredly be uppercase-d
    let keyCode = String.fromCharCode(e.keyCode).toUpperCase();
    switch(keyCode) {
      case 'Q':
      case 'W':
      case 'E':
      case 'A':
      case 'S':
      case 'D':
      case 'Z':
      case 'X':
      case 'C':
        // if the key pressed matches one of the chosen one, update the state with the value of the key pressed
        this.setState({
          output: keyCode
        });
        // call a function which is used to emulate the press of the button (by including the functionality of the active pseudo-selectors and  playing the audio of the respective button)
        this.pressButton(keyCode);
        break;
      default:
        // by default set the output to be blank
        this.setState({
          output: ''
        });
        break;
    }
  }

  /*
  create a function which is used to emulate the active state on the buttons 
  this function is called in response to a keydown event with a value matching one of the selected letters
  */
  pressButton(value) {
    // target the exact button with a text matching the value of the key pressed
    // add a class of active and remove it briefly afterwards with a timeout
    // while adding the class, call also the function to play the audio for the respective button
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      let textButton = button.textContent;
      if(textButton === value) {
        button.classList.add("active");
        this.playAudio(button);
        let timeoutID = setTimeout(() => {
          button.classList.remove("active");
          clearTimeout(timeoutID);
        }, 150);
      }
    });
  }

  // create a function which plays the audio nested in the element passed as argument 
  playAudio(element) {
    let audio = element.querySelector("audio");
    // if the audio is currently being played, stop it (pause it and reset its progress)
    if(!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    // play the audio
    audio.play();
  }

  
  /* render 
  - an area in which to display the clickable element that was pressed
    include the value to be showcased as an _output_ property
  - an area in which the clickable elements are included
    include the function which is called to update the state, and added for each button in response to a click event   
  */
  render() {
    return (
      <div className="App" id="drum-machine">

        <AppOutput output={this.state.output}/>
        <AppInput handleInput={this.handleInput}/>

      </div>
    );
  }
  
}

export default App;
