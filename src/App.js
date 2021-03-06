import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const App = props => {
    const [personState, setPersonsState] = useState({  // only available in classes old way before hooks
        persons: [
          { id: 'sdfsfd1', name: 'Max', age: 28},
          { id: 'sdfsfd2', name: 'Dave', age: 52},
          { id: 'sdfsfd3', name: 'Liam', age: 24}
        ],
        otherState: 'some value',
        showPersons: true
      })

      const switchHandler = () => {
        // console.log('Was Clicked!')
        // DO NOT DO THIS this.state.persons[0].name = 'Leon'
        // with this method this replaces the old state
        setPersonsState({
          persons: [
            { name: 'sdfax', age: 281},
            { name: 'Dane', age: 522},
            { name: 'Leon', age: 256}
          ]
        })
    }

    const nameChangeHandler = (event, id) => {
      const personIndex = personState.persons.findIndex(p => {
        return p.id === id
      })

      const person = {
        ...personState.persons[personIndex] // puts objects into new object
      }

      person.name = event.target.value

      const persons = [...personState.persons]
      persons[personIndex] = person
      setPersonsState({persons: persons,
      showPersons: true})
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

    const togglePersonsHandler = () => {
      const doesShow = personState.showPersons
      setPersonsState({
        persons: [
          { name: 'Max', age: 28},
          { name: 'Dave', age: 52},
          { name: 'Liam', age: 24}
        ],
        showPersons: !doesShow})
    }

    const deletePersonHandler = (personIndex) => {
      //const persons = personState.persons.slice() // create new array so don't del old data
      const persons=[...personState.persons] // using spread method more modern
      persons.splice(personIndex, 1)
      setPersonsState({persons: persons,
                      showPersons: true})
    }

    let persons = null

    if (personState.showPersons){
      persons = (
        <div>
          {personState.persons.map((person, index) => {
            return <Person 
            click={() => deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <button 
        style={style}
        onClick={togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
