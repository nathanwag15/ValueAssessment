import React, { Component } from 'react';
import Test from './test';

export default class Questions extends Component {
    constructor(props){
        super(props);

        this.state = {
                values: ["Accountability", "Achievement", "Adventure", "Assertiveness", "Authenticity", "Authority", "Balance", "Beauty", "Career",
                        "Caring", "Challenge", "Compassion", "Connection", "Contribution", "Cooperation", "Courage", "Creativity", "Curiosity", "Efficiency", "Encouragement", "Equality",
                        "Excitement", "Faith", "Fitness", "Flexibility", "Freedom", "Friendliness", "Forgiveness", "Fun", "Generosity", "Gratitude", "Honesty", "Humility",
                        "Independence", "Integrity", "Intimacy", "Justice", "Kindness", "Learning", "Legacy", "Loyalty", "Love", "Mindfulness", "Organized",
                        "Open-mindedness","Passion", "Patience", "Persistence", "Quality", "Recognition", "Respect", "Risk-Taking", "Romance", "Safety", "Self-awareness",
                        "Self-development", "Self-control", "Sensuality", "Skillfulness", "Spirituality", "Supportive", "Trust", "Urgency", "Wealth"],
                counter: 0,
                values_num: [0] * 63,
                values_ordered: {
                    five: [],
                    four: [],
                    three: [],
                    two: [],
                    one: []
                }
        }

        this.questionMaker = this.questionMaker.bind(this);
        this.answerSaver = this.answerSaver.bind(this);
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

    answerSaver = (num) => {
        var values_ordered_temp = this.state.values_ordered
        const values = this.state.values
        var counter = this.state.counter

        if (num == 1) {
            values_ordered_temp.one.push(values[counter]);
        } else if (num == 2) {
            values_ordered_temp.two.push(values[counter]);
        } else if (num == 3) {
            values_ordered_temp.three.push(values[counter]);
        } else if (num == 4) {
            values_ordered_temp.four.push(values[counter]);
        } else if (num == 5) {
            values_ordered_temp.five.push(values[counter]);
        };
         
        console.log(this.state.values_ordered)
        this.setState({ values_ordered: values_ordered_temp})
        this.setState({
            counter: this.state.counter + 1})
    }

    render(){
        if (this.props.start == true ) {
            if (this.state.counter <= 63) {
                return(
                    <div className="test-wrapper">
                        <div className="directions">
                            Select a Number
                        </div>
                        <div className="question-word">
                            {this.questionMaker()}
                        </div>
                        <div className="button-wrapper">
                            <div className="top">
                                <button className="question-buttons" onClick = {() => this.answerSaver(1)}>1</button>
                                <button className="question-buttons" onClick = {() => this.answerSaver(2)}>2</button>
                                <button className="question-buttons"onClick = {() => this.answerSaver(3)}>3</button>
                                <button className="question-buttons" onClick = {() => this.answerSaver(4)}>4</button>
                                <button className="question-buttons" onClick = {() => this.answerSaver(5)}>5</button>
                            </div>
                        </div>
                        {this.state.counter}/63
                    </div>
                )
            }else {
                return(
                    <Test values_ordered = {this.state.values_ordered} />
                )
            }
        }else {
            return null
        }
    }
}