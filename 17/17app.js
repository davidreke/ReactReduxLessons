import React, { Component } from 'react';
import People from './people'
import AddPerson from './addPerson'



// we're going to create a new component, addPerson.js
class App extends Component{
 
  state = {
    listOfPeople: [
      {name: 'John Doe', age: 42, favoriteFood: "Pizza", id: 1},
      {name: 'Jane Doe', age: 40, favoriteFood: "beef Jerkey", id: 2},
      {name: 'David Reke', age: 32, favoriteFood: "Dirt", id: 3}
    ]
  }
  render () {
    return (
      <div className="App">
        <h1> my First React App</h1>
        <p>Welcome!</p>
        <People listOfPeople={this.state.listOfPeople} />
        <AddPerson/>
      </div>
    );
  }
}

export default App;
