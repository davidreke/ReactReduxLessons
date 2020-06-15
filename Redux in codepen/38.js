const { createStore } = Redux;

console.log('the basics work')

const initState = {
  todos: [],
  posts: []
}
// 2. add a spread operator to include all the state in a reducer
function myReducer(state = initState, action){
  if (action.type =='ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    } 
    
  if (action.type =='ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
}

const store = createStore(myReducer)

// 1. add a subscription to the store and then preview it in the console.log

store.subscribe(()=> {
  console.log('state updated');
  console.log(store.getState())
})


store.dispatch({ type: 'ADD_TODO', todo: 'sleep some more'})

store.dispatch({
  type: 'ADD_TODO',
  todo: 'prepare node.js'
})
  

store.dispatch({
  type: 'ADD_POST',
  post: 'Hello world!'
})