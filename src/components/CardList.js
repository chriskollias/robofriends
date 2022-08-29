import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    /*
    // uncomment this to test the ErrorBoundary surrounding this component
    if (true) {
      throw new Error("An error has occurred!")
    }
    */

    return (
      <div>
        {
          // can put a big {} like this inside a component's return() to do a bunch of javascript inside
        
          // generate array of <Card /> components we want
          robots.map((user, i) => {
          // when generating arrays of components, ideally you want to give each element a unique key prop that doesn't change (so don't use array index)
            return (
              <Card 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
              />
            )
          })  
        }
      </div>
    );
}

export default CardList;