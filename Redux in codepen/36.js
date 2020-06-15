const { createStore } = Redux;


const initState = {
  todos: [],
  posts: []
}

//   3. add a console.log
function myreducer(state = initState, action){
  console.log(action, state);
}

const store = createStore(myreducer)

// an action is a javascript object
// 1. create your first action
const todoAction = {
//   every action has a type property, and its in all caps
  type: 'ADD_TODO',
  todo: 'buy milk'
}

// 2. now we dispatch the action
store.dispatch(todoAction)
  