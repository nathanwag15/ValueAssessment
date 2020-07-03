import React, { Component } from 'react';


import Guidelines from './guidelines';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      start: true
    }

    this.startTest = this.startTest.bind(this)
  }

  startTest() {
    this.setState({
      start: true
    });
  }

  buttonMaker() {
    if (this.state.start === false) {
      
      return <button onClick={() => this.startTest}>Start</button>
    }
  }
  render() {
    return (
      <div className='app'>
        <div className="value-assesment-title">
          <h1>Value Assesment</h1>
        </div>
        <div className="spacer100"></div>

        <Guidelines 
          start = {this.state.start}
        />
        {this.buttonMaker()}
        
      </div>
    );
  }
}
