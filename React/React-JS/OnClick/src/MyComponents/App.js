import React from 'react';
import Button from './Button';

export default function App() {

    const[Things, SetThings] = React.useState(["Item-1", "Item-2"])

    function AddItem() {

        const NewThing = `Item ${Things.length + 1}`

        SetThings(PrevState => {

            return [...PrevState, NewThing]

        })

    }

    const ThingsElement = Things.map(thing => {
        
        return <p key={thing}>{thing}</p>
    
    })


  return (

   <div className="main">

        <Button click={AddItem}/>

        {ThingsElement}

   </div> 

  )

}
