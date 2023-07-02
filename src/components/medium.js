// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

import React, {useState} from "react";

class BasicInfo extends useState {
    
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: props.name,
        number: props.number,
        birthdate: props.birthdate,
        location: props.location,
      }
    };
  }
  render() {
    return (
      <div>
        <h1>BasicInfo</h1>
        <p>{this.stage.person.name}</p>
        <p>{this.stage.person.number}</p>
        <p>{this.stage.person.birthdate}</p>
        <p>{this.stage.person.location}</p>
      </div>
    );
  }
}

export default BasicInfo;

