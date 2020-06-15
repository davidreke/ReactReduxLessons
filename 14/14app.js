import React, { Component } from 'react';
import People from './people'



class App extends Component{
  // 1. Add in State that is an object with an array of people that are also objects. Don't include the IDs yet.
  // 8. add in the id
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
        {/*2 go back to just one people component, but with the prop ListOfPeople, then go to people.js */}
        <People listOfPeople={this.state.listOfPeople} />
      </div>
    );
  }
}

export default App;
