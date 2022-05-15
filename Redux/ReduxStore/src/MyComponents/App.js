import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

// useSelector will takes and State which we've provided in ours REDUX-STORE and that state have an object equals to {counter : 0} therefore we've used state.counter

//useSelector will always takes STATE as ARGUMENTS OR AS PARAMETER from ours REDUX-STORE if we hover on the useSelector we can see that

export default function App() {

    const counter = useSelector((state) => state.counter);

    return (
        <div>
            <h1>
                Counter by redux
            </h1>
            <h2>
                {counter}
            </h2>
        </div>
    )
}
