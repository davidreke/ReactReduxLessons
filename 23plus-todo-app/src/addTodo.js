// 1. create this file and import needed stuff
import React, { Component } from 'react'

// 2. add the class
class AddTodo extends Component {
    // 3. add state and handlers
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // 8. comment out the console and add in the prop
        this.props.addTodo(this.state);
        // 10. Lets make the input field empty out when we submit, add the below setState command and then do 11 on the input
        this.setState({
            content: ''
        })
    }
    
    render(){
        return (
            <div>
                {/* leave the onsubmit equal to blank at first */}
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                        {/* 11 change the value of input to this.state.content */}
                    <input type='text' onChange={this.handleChange} value = {this.state.content}/>
                </form>
            </div>
        )
    }
}

// 4. export component then go to app.js
export default AddTodo