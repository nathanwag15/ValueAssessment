import React, { Component } from 'react';

export default class Questions extends Component {
    constructor(props){
        super(props);

        this.state = {
                values: ["Accountability", "Achievement", "Adventure", "Assertiveness", "Authenticity", "Authority", "Balance", "Beauty", "Carrer",
                        "Caring", "Challenge", "Compassion", "Connection", "Contribution", "Cooperation", "Courage", "Creativity", "Curiosity", "Efficiency", "Encouragement", "Equality",
                        "Excitement", "Faith", "Fitness", "Flexibility", "Freedom", "Friendliness", "Forgiveness", "Fun", "Generosity", "Gratitude", "Honesty", "Humility",
                        "Independence", "Integrity", "Intimacy", "Justice", "Kindness", "Learning", "Legacy", "Loyalty", "Love", "Mindfulness", "Organized",
                        "Open-mindedness","Passion", "Patience", "Persistence", "Quality", "Recognition", "Respect", "Risk-Taking", "Romance", "Safety", "Self-awareness",
                        "Self-development", "Self-control", "Sensuality", "Skillfulness", "Spirituality", "Supportive", "Trust", "Urgency", "Wealth"],
                counter: 0
        }

        this.questionMaker = this.questionMaker.bind(this)
    }

    questionMaker() {
        const values = this.state.values
        const counter = this.state.counter
        if (counter < values.length) {
            return(
                <div>
                    <h1>{values[counter]}</h1>
                </div>
            )
        }
    }

    render(){
        if (this.props.start == true) {
            return(
                <div className="test-wrapper">
                    <div className="question-word">
                        {this.questionMaker()}
                    </div>
                    <button onClick = {() => this.setState({counter: this.state.counter + 1})}>Next</button>
                    <button onClick = {() => this.setState({counter: 0})}>Restart</button>
                </div>
            )
        } else {
            return null
        }
    }
}