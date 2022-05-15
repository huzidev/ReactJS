import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

// useSelector will takes a State which we've provided in ours REDUX-STORE and that state have an object equals to {counter : 0} therefore we've used state.counter

//useSelector will always takes STATE as ARGUMENTS OR AS PARAMETER from ours REDUX-STORE if we hover on the useSelector we can see that

// DISPATCH is just a function used to Send ours ACTIONS TO REDUCER if we hover on the useDispatch we can see the uses of dispatch

// and we'll used that DISPATCH in ours FUNCTION where we wanted to import or wanted to have the access of state ACTION thought REDUX-STORE
export default function App() {

    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    // basically this counter and dispatch are just name of variables which are equals to useSelector and useDispatch functions and these variables are just for REFERENCE just like prototypes of C-language 

    const increment = () => {

        dispatch(increment());

    };
    
    // here we've used dispatch for sending if we hover on that dispatch we can see that it'll takes an action type

    const decrement = () => {

        dispatch(decrement());

    };

    const addBy = () => {

        dispatch(addBy( {payload: 10} ))
    // we can provide any value want in payload then we will pass action.payload in ours REDUX-STORE
    }

    return (
        <div>
            <h1>
                Counter by redux
            </h1>
            <h2>
                {counter}
            </h2>
            <button onClick={decrement}>
                -
            </button>
            <button onClick={increment}>
                +
            </button>
            <button onClick={addBy}>
                Add By 10
            </button>
        </div>
    )
}
