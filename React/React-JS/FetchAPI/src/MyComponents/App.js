import React from 'react';

export default function App() {
    
    const[StarWarsData, SetStarWarsData] = React.useState({})
    
    const[Count, SetCount] = React.useState(1) // we didn't starts from zero because there can be no info about any character at 0th
    

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => )

    return(

    )
}
