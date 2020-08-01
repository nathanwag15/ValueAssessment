import React, {Component} from 'react';
import CountWin from './count-win';

export default class Compiler extends Component {
    constructor(props){
        super(props)

        this.state = {
            first_word: '',
            second_word: '',
            counter: 1,
            winObj: {},
            status: "not_started"
        }

        this.testGenerator = this.testGenerator.bind(this)
    }

    objectMaker() {
        var list_of_num = this.props.list_of_num
        var winObj = this.state.winObj 
        for (var i = 0; i < list_of_num.length; i++) {
            winObj[list_of_num[i]] = 0
        }
        this.setState({winObj: winObj})
        
    }

    testGenerator() {
        var counter = this.state.counter      
        this.setState({
            first_word: this.props.list_of_num[0]
        });
        this.setState({
            second_word: this.props.list_of_num[counter]
        });
        if (counter === this.props.list_of_num.length - 1 ) {
            this.setState({counter: 1})
            this.props.list_of_num.splice(0, 1);
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }


    clickFunctions(winning_value) {
        var winObj = this.state.winObj
        winObj[winning_value] += 1
        this.setState({winObj: winObj})
        this.testGenerator()
    }

    startClickFunctions(){
        this.objectMaker()
        this.testGenerator()
        this.setState({
            status: "start"
        })
        

    }

    displayStart() {
        if(this.state.status==="not_started"){
            return(
                <div className = "start-button">
                    <button  onClick={() => this.startClickFunctions()}>start next part</button>
                </div>
            )
        }
    }

    displayQuestions(){
        if(this.state.status==="start") {
            return(
                <div className="compare-button-wrapper">
                    <button className="compare-button" onClick={() => this.clickFunctions(this.state.first_word)} >{this.state.first_word}</button>
                    <button className="compare-button" onClick={() => this.clickFunctions(this.state.second_word)} >{this.state.second_word}</button>
                </div>
            )
        }
    }

    render() {
    return(
        <div>
            {this.displayStart()}
            {this.props.list_of_num.length > 1?(this.displayQuestions()) : null}
            {this.props.list_of_num.length === 1?(<CountWin winObj = {this.state.winObj} />): null}
            
        </div>
    )}
}