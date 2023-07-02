// HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React from "react";
import BasicInfo from "./medium";

const People = () =>{
    const list = [
      {
        name: "Jachimke",
        number: "111.111.1111",
        birthdate: "01/01/2000",
        loctaion: "Charlotte, Nc",
      },

      {
        name: "Aaron",
        number: "222.222.2222",
        birthdate: "02/02/2002",
        loctaion: "maimi,florida",
      },

      {
        name: "Brandon",
        number: "333.333.3333",
        birthdate: "03/03/2003",
        loctaion: "huston texas",
      }
    ];

    return(
        <div>
            {list.map((person) => (
                <BasicInfo name={person.name} age={person.number} dateofBirth={person.birthdate} number={person.loctaion}/>
            ))}
        </div>
    );
}

export default People;