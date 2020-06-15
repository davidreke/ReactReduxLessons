import React, { Component } from 'react';

class People extends Component{
    render () {
        // 3. remove the console.log portion and change the const
        const { listOfPeople } = this.props
        // 4.add in the map function for list of people, cut the return portion of this component and put it into your map function
        const listOfPeoplehtml = listOfPeople.map(person => {
            return (
                // 8. add in a key/id here and in the app.js file
                <div className='people' key={person.id}>
                    <div>Name: {person.name} </div>
                    <div>Age: {person.age}</div>
                    <div>Favorite food: {person.favoriteFood}</div>
                    <br/>
                </div>)

        })
        return (
                // 4. remove ctrt + x everything out of this section 
                // 5. add in a person-list portion
                // 6. show the console.log... it will show a warning that you don't have a key
                // 7. Keys are used to make sure that when we edit state, we correctly render the right thing.
                <div className="person-list">
                    {listOfPeoplehtml}
                </div>
                
            

        )
    }
}

// after adding step five, do step six in app.js

export default People