import React, { Component } from 'react';

class People extends Component{
    render () {
        // 2. add in this console.log of this.props
        console.log(this.props);
        //  4 you can also deconstrust props like below
        const {name, age, favoriteFood} = this.props
        return (
            <div className="people">
                {/* 3. replace hard coded values with props*/}
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Favorite food: {this.props.favoriteFood}</div>
                <br/>
                {/* 5 use deconstructed content */}
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Favorite food: {favoriteFood}</div>
            </div>
        )
    }
}

// after adding step five, do step six in app.js

export default People