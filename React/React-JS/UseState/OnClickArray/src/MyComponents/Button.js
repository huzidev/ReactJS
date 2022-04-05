import React from 'react';

export default function Button(props) 

{

  return (
    // we've declared click as ours props therefore we put onClick {pops.click} and in ours APP.js {click} is equal to AddItem

    // make sure in react onClick's (C) should've to be capital
    
      <button onClick={props.click} className="Btn">
          Add-Item
      </button>

  )

}