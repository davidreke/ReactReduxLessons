import React, { Component } from 'react';
import People from './people'
import AddPerson from './addPerson'


// 1. Current Issue, we can add the new person to the props, but how do we add the new person to the state for the whole page
//  we do this by creating a function and using it as a prop

class App extends Component{
 
  state = {
    listOfPeople: [
      {name: 'John Doe', age: 42, favoriteFood: "Pizza", id: 1},
      {name: 'Jane Doe', age: 40, favoriteFood: "beef Jerkey", id: 2},
      {name: 'David Reke', age: 32, favoriteFood: "Dirt", id: 3}
    ]
  }
// 2. we add in this function then pass it into props in 3.
  addPerson = (person) => {
    // start off by console.loggin the person, and then we'll add in the add person functionality later on
    // console.log(person);

    // 5. Comment out the console.log and add in the functionality
    // 6. First we need to add in a key
      person.id=Math.random();
    // 7.now we need to set state
    // this.setState({
    //   listOfPeople: this.listOfPeople.push(person)
    // })
    // Actually the above won't work because it alters the previous state
    // 8. use the spread operator instead
    let newListofPeople = [...this.state.listOfPeople, person];
    this.setState({
      listOfPeople: newListofPeople
    })
  }
  render () {
    return (
      <div className="App">
        <h1> my First React App</h1>
        <p>Welcome!</p>
        <People listOfPeople={this.state.listOfPeople} />
        {/* 3. We add in the add person as a prop here and then do 4. on addPerson.js */}
        <AddPerson addPerson={this.addPerson}/>
      </div>
    );
  }
}

export default App;
