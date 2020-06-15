import React, {Component} from 'react';
// 9. part B, import Todo
import Todos from './Todos';
// 2. So far we have added the CDN to index.html (1), we have delted app.css, the logos in public and src files, and the references to the logos in app.js

// 4. change the function to a class
class App extends Component{
  // 5. add a dummy state
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  // 6. create a file in src called Todos.js

  // 9. Add a delete todo app that just consoleLogs the id

  deleteTodo = (id) => {
    console.log(id);
    // 12. add delete/change state functionality
    // We will be using the filter method to return all todos that don't match the id to be matched
    const todos = this.state.todos.filter(todo => { return todo.id !== id})
    this.setState({
      todos: todos
    })
  }

  render () {
    return (
      <div className="todo-app container">
        {/* 3. delete all the "junk" here */}
        {/* 10. add an h1 and a Todos component with props go to Todos for step 11*/}
        <h1 className="center blue-text"> Todo's</h1>
        <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
