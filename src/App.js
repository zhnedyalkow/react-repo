import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
    state = {
        persons: [

            {
                name: 'Zhitomir',
                age: 28
            },
            {
                name: 'Vasil',
                age: 27
            },
            {
                name: 'Jordan',
                age: 24
            }
        ],
        otherState: 'some other value',
        showPersons: false

    }

toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
} 

nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    // event is an event that has been triggered, target is target element
    // events are objects with certain properties, e.target is one of them
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
        persons: persons
    });
}

deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
}
  render() {

    const style = {
        backgroundColor: 'green',
        color: 'white', 
        font: 'inherit',
        border: '1px solid bl ue',
        padding: '8px',
        margin: '5px',
        cursor: 'pointer'
    };

    let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {
                      this.state.persons.map((person, index) => {
                          return <Person 
                            click={() => this.deletePersonHandler(index)}
                            name = {person.name}
                            age = {person.age}
                            key = {person.id}
                            changed = {(event) => this.nameChangedHandler(event, person.id)}
                          />
                      })
                  } 
              </div>
          )
          style.backgroundColor = 'red';
      }

      let classes = [];
      if (this.state.persons.length <= 2) {
          classes.push('red');
      } 
      if (this.state.persons.length <= 1) {
          classes.push('bold');
      }

    return (
          <div className="App">
        <h1>I'm react app</h1>
        <p className={classes.join(' ')}>something</p>
        <button
         style={style} onClick={this.toggleHandler}>Click here</button>
         {persons}
      </div>
    );
  }
}

export default App;