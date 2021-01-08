import React, {Component} from 'react';
import Guidelines from './guidelines';

export default class Beginning extends Component {
    constructor(){
        super();

        this.state = {
            displayState: "Form"
        }

    }

    entryForm() {
        if (this.state.displayState == "Form"){
            return(
                <div>
                    Hello, please Fill out this form
                </div>
            )
        } else {
            return(
                <div>
                    <Guidelines start = {this.props.start}/>
                </div>
            )
            }
    }
    render(){
        return (
            <div>                
                {this.entryForm()}
            </div>
        )
    }
}