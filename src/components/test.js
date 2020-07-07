import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props){
        super(props);

        this.state = {
            main_list: []
        }
    }

    listReducer() {
       const list_of_num = []
       const i = 0
       while (i <= 64) {
           if (this.props.new_values[i] == 5) {
               list_of_num.push(this.props.values[i])
           }
       } 
       this.state.main_list.push(list_of_num)
    }

    render() {
        return (
            <div>
                {this.listReducer()}
            </div>
        )
    }
}