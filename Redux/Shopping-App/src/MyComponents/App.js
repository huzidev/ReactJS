import React from 'react';
import Auth from './Auth.js';
import Layout from './Layout.js';
import Notification from './Notification.js'
import { useDispatch, useSelector } from 'react-redux';

export default function App() {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    
    const cart = useSelector((state) => state.cart);

// the cart will help us to send the HTTPS request

// useSelector is used for have the access of REDUX-STORE and takes Redux-state as parameter and (State) is basically REDUX's state and auth is the name we've provided in ours REDUX STORE inside REDUCER and isLoggedIn is the action we wanted to update

// fetching the data from the backend files

    React.useEffect(() => {

    const sendRequest = async() => {

        const response = await fetch('https://redux-http-7c1de-default-rtdb.firebaseio.com/cartItems.json', {

            method : "PUT", // PUT is just the name of ours request name
            body : JSON.stringify(cart)

        })

        const data = await response.json()

// this (DATA) variable is basically used when ours RESPONSE fetched from server it converts ours RESPONSE into json FORMAT 

    };

    sendRequest();

    }, [cart])

// IT IS MANDATORY TO CALL THE VARIABLE NAME LIKE HERE WE'VE CALLED sendRequest() else the DATA would not update on backend

// The await operator is used to wait for a Promise . It can only be used inside an async function just like a DELAY

// async/await syntax fits great with fetch() because it simplifies the work with promises

// promise basically represents the completion of an asynchronous operation

// .JSON should have to always be their because it helps us to add the collection their on backend files

// In dependency array we've passed [cart] so whenever (CART) changes data will fetch again

    return (
        <div>
            <Notification type='warning' message='testing'/>
            
            {/* through Ternary operators */}

            {/* { isLoggedIn ? <Layout /> : <Auth />} */}

            { !isLoggedIn && <Auth />}

            {/* (!)isLoggedIn simply means false && <Auth /> only if isLoggedIn is false */}
            
            { isLoggedIn && <Layout />}
            
            {/* isLoggedIn simply means true && <Auth /> only if isLoggedIn is true */}
        </div>
    )
}