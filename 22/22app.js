import React, { Component } from 'react';
import People from './people'
import AddPerson from './addPerson'

// 1. lifecycle mounts, here is a diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
//  lifecycle hooks are methods that trigger at different points in the loading of the DOM


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
  // 2. lets add a componentDidMount
    componentDidMount(){
      console.log('Component mounted')
    }
    // 3. Add componentDidUpdate
    componentDidUpdate(prevProps, prevState){
      console.log('component updated')
      console.log(prevProps, prevState)
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
  