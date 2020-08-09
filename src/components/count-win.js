import React, { Component } from 'react';

export default class CountWin extends Component{
   constructor(props){
       super(props)

       this.state = {
           results: []
       }

       this.winFinder = this.winFinder.bind(this)
   }

   winner(win, location, results){
        
        this.props.winObj[win] = this.props.winObj[win] + 1
        console.log(this.props.winObj[win])
        this.setState({results: results})

   }

   originalWinner(win, location, results){
       this.props.winObj[win] = this.props.winObj[win] + 1
        console.log(this.props.winObj[win]) 
   }

   tieBreaker(valueOne, valueTwo, location, results){
            return(
                <div className="compare-button-wrapper">
                    <button className="compare-button" onClick={() => this.winner(valueOne, location, results)} >{valueOne}</button>
                    <button className="compare-button" onClick={() => this.winner(valueTwo, location, results)} >{valueTwo}</button>
                </div>
            )
   }

   winFinder(){
    var results = []
    var val
    console.log(this.props.winObj)    
    for (const [key, value] of Object.entries(this.props.winObj)) {
        // console.log(`${key}: ${value}`);
        if (results.length == 7) {
            for (var test = 0; test < results.length; test ++){
                var compare = results[test]
                console.log(compare)

                if (this.props.winObj[compare] < value){
                    results[test] = key;
                    break;
                } else if (this.props.winObj[compare] = value){
                    console.log(value, key, compare, this.props.winObj[compare])
                    val = this.tieBreaker(compare, key, test, results)
                    break;
                } else if (this.props.winObj[compare] > value){
                    break;
                } else {
                    val = this.state.results
                }
            }
        } else {
            results.push(key)
        }
        
    
    }
    return(
        <div>
            {val}
        </div>
    )
    };

   render(){
    return(
        this.winFinder()
    )};
}