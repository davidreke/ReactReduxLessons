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
  // 1. in this lesson we are doing to add a delete person function
  deletePerson = (id) => {
    // 5. add console.log(id) to console log when we click the ID button
    console.log(id);
    // 6. add in the portion that removes the person
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
        {/* 2. Now we need to pass the function as a prop. The prop we're using is deletePerson, got people.js for step 3 */}
        <People listOfPeople={this.state.listOfPeople} deletePerson={this.deletePerson} />
        <AddPerson addPerson={this.addPerson}/>
      </div>
    );
  }
}

export default App;
