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

    function AddItem() { // for inserting or Updating ours List

        const NewThing = `Item ${Things.length + 1}` // just a method to print Item with updated number 

        SetThings(PrevState => { // here SetThings which is the function part of ours useState PrevState is just a variable or SIMPLY a PARAMETER which will receive value from value part of useState 

            return [...PrevState, NewThing] // here we've called call back function and returns [...prevstate] which will all the value which is present ByDefault at beginning and NewThing is the updated new item with updated numbers

            //[...] is basically called array spread operator used to access all the values, data in the array

        })

    }

    const ThingsElement = Things.map(Thing => { // THINGS is the value part of useState Thing is just like variable
        
    // Their all the updated item or values will be received which will be ultimately return to render where we'll use {ThingsElement} for printing all the updated value

        return <p key={Thing}>{Thing} <hr /></p>
    
    })


  return (

   <div className="main">
    {/* click is the name of ours PROPS which will be use in BUTTON.js */}
        <Button click={AddItem}/> 
        {ThingsElement}

   </div> 

  )

}
