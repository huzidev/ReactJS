import React from 'react';
import Button from './Button';

export default function App() {

    const[Things, SetThings] = React.useState(["Thing-1", "Thing-2"])

    function AddItem() {
        const NewThing = `Thing ${things.length + 1}`
        SetThings(PrevState => {
            return [...PrevState, NewThing]
        })
    }

    


  return (
   <div className="main">
        <Button />
   </div> 
  )

}
