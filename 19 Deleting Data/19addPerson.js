import React, { Component} from 'react'

class AddPerson extends Component{
    state = {
        name: null,
        age: null,
        favoriteFood: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        // 4. add in the function that we have passed as props
        this.props.addPerson(this.state)
    }
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