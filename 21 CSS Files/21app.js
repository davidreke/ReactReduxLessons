// Here we cover CSS. Start by Creating people.css

import React, { Component } from 'react';
import People from './people'
import AddPerson from './addPerson'


class App extends Component{
 
  state = {
    listOfPeople: [
      {name: 'John Doe', age: 42, favoriteFood: "Pizza", id: 1},
      {name: 'Jane Doe', age: 40, favoriteFood: "beef Jerkey", id: 2},
      {name: 'David Reke', age: 32, favoriteFood: "Dirt", id: 3}
    ]
  }

  addPerson = (person) => {

    let newListofPeople = [...this.state.listOfPeople, person];
    this.setState({
      listOfPeople: newListofPeople
    })
  }
  deletePerson = (id) => {
    console.log(id);
    let people = this.state.listOfPeople.filter(person =>{
      return (person.id !== id);
    })
    this.setState({
      listOfPeople: people
    })
  }
  render () {
    return (
      <div className="App">
        <h1> my First React App</h1>
        <p>Welcome!</p>
        <People listOfPeople={this.state.listOfPeople} deletePerson={this.deletePerson} />
        <AddPerson addPerson={this.addPerson}/>
      </div>
    );
  }
}

export default App;
