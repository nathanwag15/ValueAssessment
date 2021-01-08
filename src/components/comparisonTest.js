import React, { Component } from 'react';
import Compiler from './compiler';

export default class Test extends Component {
    constructor(props){
        super(props);

        this.state = {
            list_of_num: []
        }

    }

    shortListGenerator() {
       var list_of_num = []
       var stable_num = []
       if (list_of_num.length < 7){
        list_of_num = this.props.values_ordered.five
       }
       if (list_of_num.length < 7) {
           list_of_num = list_of_num.concat(this.props.values_ordered.four)
       }
       if (list_of_num.length < 7) {
           list_of_num = list_of_num.concat(this.props.values_ordered.three)
       }
       if (list_of_num.length < 7) {
           list_of_num = list_of_num.concat(this.props.values_ordered.two)
       }
       if (list_of_num.length < 7) {
           list_of_num = list_of_num.concat(this.props.values_ordered.one)
       }
       return(list_of_num)
       }
    
   
    render() {
        return(
            <div>                
                <Compiler 
                   list_of_num = {this.shortListGenerator()}/>                
            </div>
        )
    }
}