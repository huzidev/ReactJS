import React from 'react';

export default function App() {
    
    const[StarWarsData, SetStarWarsData] = React.useState({})

    const[Count, SetCount] = React.useState(1) // we didn't starts from zero because there can be no info about any character at 0th
    

    React.useEffect(() => { // we've to pass 2 parameters in useEffect first one should've to be a call back function and other one is called DEPENDENCY ARRAY

        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => SetStarWarsData(data)) // data as parameter will receive StarWarsData from state array
            console.log(StarWarsData);

    }, []) // it is mandatory to use DEPENDENCY ARRAY in use effect as SECOND PARAMETER BECAUSE when we use useEffect we've to pass 2 parameters first one should've to be a call back function and the other one is called DEPENDENCY ARRAY where we've to pass all the dependency OR values, data that we wanted to UPDATE when condition changes

    // BUT WHY DO WE'VE TO USE THIS DEPENDENCY ARRAY OR useEffect in first case 

    // BASICALLY IT IS CALLED SIDE EFFECT fetching API is one of the term which is out of reach of REACT and we've to help REACT regarding Fetching API and if we did't use useEffect and provide empty or specific dependency then we'll stuck inside a LOOP which render automatically infinite times for check put console.log(starwarsdata) we'll see that data is been fetching from api continuously while we didn't want it run continuously

    // therefore we've to specify when to render by making some changes like here we've created a counter to update data therefore we've to specify what to render what counter changes 

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
