import React from 'react';
import Button from './Button';

// state and props are bit similar but props is IMMUTABLE (CAN'T BE CHANGED) BUT STATE IS MUTABLE can be change within components

// we use STATE only when we want to create something which should've to be update 

export default function App() {

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
