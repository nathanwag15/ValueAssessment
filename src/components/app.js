import React, { Component } from 'react';


import Guidelines from './guidelines';
import Questions from './questions';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      start: false
    }

    this.guidelineGrabber = this.guidelineGrabber.bind(this)
  }

  guidelineGrabber() {
    if (this.state.start == true) {
      return (
        <button onClick={() => this.setState({start: false})}>Guidelines</button>
      )
    }
  }

  buttonMaker() {
    if (this.state.start == false) {
      return (
      <button onClick=
      {() => this.setState({start: true})}>
      Start</button>)
    }
  }

  render() {
    return (
      <div className='app'>
        {this.guidelineGrabber()}
        <div className="value-assesment-title">
          <h1>Value Assesment</h1>
        </div>
        <div className="content-wrapper">
          <div className="spacer100"></div>

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
