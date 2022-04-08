import React from 'react';

export default function App() {
    
    const[StarWarsData, SetStarWarsData] = React.useState({})

    const[Count, SetCount] = React.useState(1) // we didn't starts from zero because there can be no info about any character at 0th
    

    React.useEffect(() => {

        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => SetStarWarsData(data)) // data will receive StarWarsData from state array
        

    })

    function Next() {

        SetCount(PrevCount => PrevCount + 1)

    }
    return(
        
        <div>

            <h2>
                The Current Count is {Count}
            </h2>

            <button onClick={Next}>

                Get Next Character

            </button>

            <pre>

                {JSON.stringify(StarWarsData, null, 2)}

            </pre>

        </div>

    )
}
