import React, { Component } from 'react';
import Assessment from './assessment';
import Form from './form';

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            formCompleted: false
        }

        // this.handleChange = this.handleChange.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
    }

    handleGenerate(){
        this.setState({
            formCompleted: true
        })
    }

    render () {
        return(
            <div>

            {
                this.state.formCompleted ? 
                    <div>
                        <Assessment />
                    </div>
                :
                    <div>
                        <h1>Opening Form</h1>
                        {/* <DatePicker 
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        /> */}
                        <a onClick={this.handleGenerate}>Generate Countdown</a>
                    </div>
            }
            </div>
        )
    }
}


