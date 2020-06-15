// this needs to be a class based componenet because it will update state
import React, { Component} from 'react'

class AddPerson extends Component{
    state = {
        name: null,
        age: null,
        favoriteFood: null
    }
    // create handle change after creating form
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    // create this after you add handlechange function calls to form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    // after you make handle Submit, import it into app.js
    // create render method before creating handle change function, but add in handleChange function after the fact
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="favoriteFood">Favorite Food</label>
                    <input type="text" id="favoriteFood" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPerson