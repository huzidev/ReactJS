import React from 'react';
import Button from './Button';

export default function App() {

    const[Things, SetThings] = React.useState(["Thing-1", "Thing-2"])

    function AddItem() {

        const NewThing = `Thing ${Things.length + 1}`

        SetThings(PrevState => {

            return [...PrevState, NewThing]

        })

    }

    const ThingsElement = Things.map(thing => {
        
        return <p>{thing}</p>
    
    })


  return (

   <div className="main">

        <Button click={AddItem}/>

        {ThingsElement}

   </div> 
   
  )

}
