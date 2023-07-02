// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

import React, {Component} from "react";

class veryeasy extends Component{
    
    render(){
        return (
          <div>
            <h1>Very Easy:</h1>
            <p>this.props.name</p>
            <p>this.props.number</p>
            <p>this.props.birthday</p>
            <p>this.props.location</p>
          </div>
        );
    }
}

export default veryeasy;