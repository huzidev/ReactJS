import React from 'react';
import Button from './Button';

export default function App() {

    const[Things, SetThings] = React.useState(["Thing-1", "Thing-2"])

    function AddItem() {
        
    }


  return (
   <div className="main">
        <Button />
   </div> 
  )

}
