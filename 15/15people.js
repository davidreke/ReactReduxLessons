import React from 'react';

// 3. replace  the class with a const 'People that is an arrow function. Then remove the render method from the function
// 4. show the error where listOfPeople doesn't exist
// 5. Add props as an argument to the new function. Then remove this from this.props when calculating the const listOfPeople
// 6. Show you can't use state
// 7. You coudl deconstruct props to show {listOfPoeple} instead of props in the function declearation
const People = (props) => {
        const { listOfPeople } = props
        const listOfPeoplehtml = listOfPeople.map(person => {
            return (

                <div className='people' key={person.id}>
                    <div>Name: {person.name} </div>
                    <div>Age: {person.age}</div>
                    <div>Favorite food: {person.favoriteFood}</div>
                    <br/>
                </div>)

        })
        return (
     
                <div className="person-list">
                    {listOfPeoplehtml}
                </div>
        )
}



export default People