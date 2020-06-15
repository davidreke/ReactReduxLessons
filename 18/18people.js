import React from 'react';


const People = (props) => {
    

        const { listOfPeople } = props
  
        return (
                <div className="person-list">
                    {/* last example is showing the map happening within the return section. I personally don't like doing it this way, but you might come across people who do. */}
                    {/* remove the below const declearation */}
                    {listOfPeople.map(person => {
            return person.age > 35? (
                <div className='people' key={person.id}>
                    <div>Name: {person.name} </div>
                    <div>Age: {person.age}</div>
                    <div>Favorite food: {person.favoriteFood}</div>
                    <br/>
                </div>
            ) : null;
        })}
                </div>
        )
}

// after adding step five, do step six in app.js

export default People