import React, { Component } from 'react';
import People from './people'



class App extends Component{
  render () {
    return (
      <div className="App">
        <h1> my First React App</h1>
        <p>Welcome!</p>
        {/* 1. add props to People component */}
        <People name="John" age="42" favoriteFood="pizza"/>
        <People name="Jane" age="40" favoriteFood="Beef Jerky" />
      </div>
    );
  }
}

export default App;
