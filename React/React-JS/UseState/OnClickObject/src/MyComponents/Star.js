import React from 'react';

export default function Star() {
 
    const star = Contact.isFav ? "StarF.jpg" : "StarE.png"

    return (

    <img src={`../assets/${star}`} className="fvr" onClick={Toggle} alt="Star-Img" />

  )
}
