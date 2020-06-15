import React from 'react';


const People = (props) => {
    
        // 3. We add deletePerson as a prop
        const { listOfPeople, deletePerson } = props

        return (
                <div className="person-list">
                    {listOfPeople.map(person => {
            return person.age > 35? (
                <div className='people' key={person.id}>
                    <div>Name: {person.name} </div>
                    <div>Age: {person.age}</div>
                    <div>Favorite food: {person.favoriteFood}</div>
                    <br/>
                    {/* 4.add button below that calls the function when clicked */}
                    {/* note: without the anonmymous function, the parenthesis at the end */}
                    {/* go to app.js for 5 */}
                    <button onClick={() => {deletePerson(person.id)}}>Delete Person</button>
                </div>
            ) : null;
        })}
                </div>
        )
}



export default People