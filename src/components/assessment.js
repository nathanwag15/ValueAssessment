import React, { Component } from 'react';


import Guidelines from './guidelines';
import Questions from './ratingQuestions';
import TopBar from './topBar.js';

import Beginning from './beginning';

export default class Assessment extends Component {
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
        {/* <TopBar /> */}
        <div className="spacer"></div>
        <div className="content-wrapper">
          {
            this.state.start ?
              <Questions start = {this.state.start}/>
            :

              <Guidelines/>
          }

          <div className="start-button">
            {this.buttonMaker()}
          </div>

        </div>
        
      </div>
    );
  }
}
