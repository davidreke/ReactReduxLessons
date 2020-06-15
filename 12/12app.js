// 1. Add { component } to the import from react.js
import React, { Component } from 'react';
// 3.crate people component before importing it
// 4. Import people app
import People from './people'


// 2. reformat our app from a function to a class
class App extends Component{
  render () {
    return (
      <div className="App">
        <h1> my First React App</h1>
        <p>Welcome!</p>
        {/* put the People component below here */}
        <People />
      </div>
    );
  }
}

export default App;
