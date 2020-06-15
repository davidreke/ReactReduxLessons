import React, { Component } from 'react';
import People from './people'



// 1. two types of components
// a. Container Components: Contaioner state, container lifecycle hooks, not concerned with UI, use classes to create 
// b.UI components: don't contain state, recieve containers from props, only concerned with UI, use functions to create
// 2. go on to people.js and change it to a function
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
      </div>
    );
  }
}

export default App;
