import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const App = props => {
    const [personState, setPersonsState] = useState({  // only available in classes old way before hooks
        persons: [
          { name: 'Max', age: 28},
          { name: 'Dave', age: 52},
          { name: 'Liam', age: 24}
        ],
        otherState: 'some value'
      })

      const switchHandler = () => {
        // console.log('Was Clicked!')
        // DO NOT DO THIS this.state.persons[0].name = 'Leon'
        // with this method this replaces the old state
        setPersonsState({persons: [
                          { name: 'sdfax', age: 281},
                          { name: 'Dane', age: 522},
                          { name: 'Leon', age: 256}
                        ],
        })
    }

    const nameChangeHandler = (event) => {
      setPersonsState({
        persons: [
          { name: 'Max', age: 28},
          { name: event.target.value, age: 52},
          { name: 'Liam', age: 24}
        ]
      })
    }

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
 
    //const [otherState, setOtherState] = useState('some other value')
    
    //console.log(personState, otherState)

    return (
      <div className="App">
        <h1>Hello World</h1>
        <button 
        style={style}
        onClick={switchHandler}>Switch</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}
        click={switchHandler}
        changed={nameChangeHandler}>My Hobbies: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );

}

export default App;

    /* only available in classes old way before hooks -- old way
    state = {
      persons: [
        { name: 'Max', age: 28},
        { name: 'Dave', age: 52},
        { name: 'Liam', age: 24}
      ],
      otherState: 'some value'
    } */ 
