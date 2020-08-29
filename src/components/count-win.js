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

   resultsMaker(newWinObj, results){
    for (const [key, value] of Object.entries(newWinObj)) {
        var finalKey = key
        console.log(finalKey)
        var finalValue = value
            for (const [key, value] of Object.entries(newWinObj)){
                if (value > finalValue) {
                    finalValue = value
                    finalKey = key
                    console.log(`${finalKey}: ${finalValue}`)
                } 
            }
        var add = "yes"
        for (var i = 0; i < results.length; i ++){
            console.log(results[i])
            if (results[i] == finalKey){
                add = "no"
            } 
        }
        
        newWinObj[finalKey] = 0
        if (add == "yes"){
            results.push(finalKey)
            console.log(add)
        }
        console.log(newWinObj)
        console.log(results)
    }

    if (results.length < 7){
        this.resultsMaker(newWinObj, results)
    }
    return( results )
   }

   winFinder(){
    var results = []
    var newWinObj = this.props.winObj
    console.log(this.props.winObj)  
    this.resultsMaker(newWinObj, results)  
    
    return(
        <div className="results-wrapper">
            <div className="spacer100"></div>
            <div className="result-title">
                Here is your top 7 values ordered by importance from top to bottom:
            </div>
            <div className="result">
                {results[0]}
            </div>
            <div className="result">
                {results[1]}
            </div>
            <div className="result">
                {results[2]}
            </div>
            <div className="result">
                {results[3]}
            </div>
            <div className="result"> 
                {results[4]}
            </div>
            <div className="result">
                {results[5]}
            </div>
            <div className="result">
                {results[6]}
            </div>
        </div>
    )
}
        
    

   render(){
    return(
        this.winFinder()
    )};
}