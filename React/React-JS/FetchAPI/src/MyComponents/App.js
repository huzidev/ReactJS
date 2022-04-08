import React from 'react';

export default function App() {
    
    const[StarWarsData, SetStarWarsData] = React.useState({})
    

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => )

    return(

    )
}
