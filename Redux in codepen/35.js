//  use Babel as your pre-processor
// use the redux external Script
// turn off auto updating preview

// 1. bring in the store
const {createStore} = Redux;

// 4. create the initial state
const initState = {
  todos: [],
  posts []
}

// 3. create a reducer that uses state and action as arguments
// 5. add a default state
function myreducer(state = initState, action){
  
}

//  2. create the store ... then pass in the reducer
const store =createStore(myreducer)


