const { createStore } = Redux;


const initState = {
  todos: [],
  posts: []
}
// 1 remove the console.log and add in an if statement that returns a new state if the action.type is ADD_TODO
function myreducer(state = initState, action){
  if (action.type =='ADD_TODO') {
    return {
//       use a spread operator
      todos: [...state.todos, action.todo]
    }
  }
}

const store = createStore(myreducer)


const todoAction = {

  type: 'ADD_TODO',
  todo: 'buy milk'
}


store.dispatch(todoAction)
  