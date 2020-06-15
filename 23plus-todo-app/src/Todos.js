// 7. import react
import React from 'react'


// 10 add deleteTodo as a prop to Todos
const Todos = ({todos, deleteTodo}) =>{
// 8 add the const that check to see if todos has a length with a ternary operator and then maps Todos if there are todos
    const todoList = todos.length ? (
        todos.map(todo => {
            return (<div className="collection-item" key={todo.id}>
                {/* 11 add a click handler on the span */}
                <span onClick={() => {deleteTodo(todo.id)}} > {todo.content} </span>
            </div>)
        })
    ) : (<p className="center"> You have no todo's left! </p>)


    return(
        <div className='todos collection'>
            {todoList}
        </div>
    )
}


// 9. Export Todos and then import it into app.js
export default Todos;