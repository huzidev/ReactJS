import React from 'react';

export default function Star(props) {
 
    let star = props.isFill ? "StarF.jpg" : "StarE.png" // as we know that ? and : are ternary operators ? means if true and : means else if false we'll pass this variable for src portion in ours JSX

    return (

    <img src={`../assets/${star}`} className="fvr" onClick={props.ToggleFunction} alt="Star-Img" />

  )
}
