// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

import { Component } from "react";

class easy extends Component{
    constructor(props) {
        super(props);

        this.state = {
            person: {

            }
        }
    }
}

export default easy;