import React from 'react';

function GenerateNewDice() {
        
    return {
            
        value: Math.ceil(Math.random() * 6),
        
        isHeld: false,

        id: nanoid()

        // for holding the CLICKED dice we've to make it an OBJECT so each dice will have its own different (values) like if (isHeld) is (true) or not or (unique id) of that dice

        // therefore we've surround the values inside {} so it'll became an object

        // ADVANTAGE of using (OBJECT) is that we don't have to declare ours code again and again because we can store multiple data or values inside object and we can drop it anywhere we wanted 
    }

}

function AllNewDice() {
    
    const NewDice = []

    for (let i = 0; i < 10; i++){

        NewDice.push(GenerateNewDice())

        // push will put the old elements at the end of new element

    }

    return NewDice
    // make sure to return whenever we creat new array 
    // so all the new info could be stored into that new array after RETURNING

}