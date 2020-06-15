import React, {Component} from 'react';
import Todos from './Todos';
// 5 import AddTodo
import AddTodo from './addTodo'

class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  // 7 add the addTodo function and pass it as a prop, then go to addTodo.js
  addTodo = (todo) => {
      // 9. Now we add a key and give the todos variable a new value and then set a new state, go preview on the local host when you're done
    todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({todos: todos})
  }

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => { return todo.id !== id})
    this.setState({
      todos: todos
    })
  }

  render () {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's</h1>
        <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
        {/* 6. add AddTodo component and then demo it in the console then come back here to add AddTodo function to pass as a prop  */}
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
