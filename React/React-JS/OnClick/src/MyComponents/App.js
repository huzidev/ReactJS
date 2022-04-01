import React from 'react';
import Button from './Button';

// state and props are bit similar but props is IMMUTABLE (CAN'T BE CHANGED) BUT STATE IS MUTABLE can be change within components

// we use STATE only when we want to create something which should've to be update like their

// their we've two strings of name things in an array and we wanted to UPDATE them onClick therefore we've to use state

// useState is basically the part of react we can also import just useState property from import

export default function App() {
    
    // what is Things and SetThings

    // basically when we uses useState there is 2 part of it is for Values and other on is function

    // therefore we've assign Things as to store value and SetThings For Manipulating Function when update is required
    
    const[Things, SetThings] = React.useState(["Item-1", "Item-2"])

    function AddItem() {

        const NewThing = `Item ${Things.length + 1}`

        SetThings(PrevState => {

            return [...PrevState, NewThing]

        })

    }

    const ThingsElement = Things.map(thing => {
        
        return <p key={thing}>{thing} <hr /></p>
    
    })


  return (

   <div className="main">

        <Button click={AddItem}/>
        {ThingsElement}

   </div> 

  )

}
