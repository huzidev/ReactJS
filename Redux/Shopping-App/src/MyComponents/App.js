import React from 'react';
import Auth from './Auth.js';
import Layout from './Layout.js';
import { useSelector } from 'react-redux';

export default function App() {

    const cart = useSelector((state) => state.cart)

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    // console.log(isLoggedIn);

    // const cartItems = useSelector(state => state.cart.itemsList);

    // console.log(cartItems);

// useSelector is used for have the access of REDUX-STORE and takes Redux-state as parameter and (State) is basically REDUX's state and auth is the name we've provided in ours REDUX STORE inside REDUCER and isLoggedIn is the action we wanted to update

    return (
        <div>
            {/* through Ternary operators */}

            {/* { isLoggedIn ? <Layout /> : <Auth />} */}

            { !isLoggedIn && <Auth />}

            {/* (!)isLoggedIn simply means false && <Auth /> only if isLoggedIn is false */}
            
            { isLoggedIn && <Layout />}
            
            {/* isLoggedIn simply means true && <Auth /> only if isLoggedIn is true */}

        </div>
    )
}