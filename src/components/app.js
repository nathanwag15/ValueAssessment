import React, { Component } from 'react';


import Guidelines from './guidelines';
import Questions from './questions';
import TopBar from './topBar.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      start: false
    }

  }

 

  buttonMaker() {
    if (this.state.start == false) {
      return (
      <button onClick={() => this.setState({start: true})}>Start</button>)
    }
  }

  render() {
    return (
      <div className='app'>
        <TopBar />
        <div className="spacer60"></div>
        
        <div className="content-wrapper">

          <Guidelines start = {this.state.start}/>
          <Questions start = {this.state.start}/>

          <div className="start-button">
            {this.buttonMaker()}
          </div>

        </div>
        
      </div>
    );
  }
}
