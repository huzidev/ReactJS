import React from 'react';
import Auth from './Auth.js';
import Layout from './Layout.js';
import products from './products';
import { useSelector } from 'react-redux';

export default function App() {

    const list = products.map(info => {

        return(
            <Auth 
                key = {info.Id}
                info = {info}
            />
        )

    }) 

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

// useSelector is used for have the access of REDUX-STORE and takes Redux-state as parameter and (State) is basically REDUX's state and auth is the name we've provided in ours REDUX STORE inside REDUCER and isLoggedIn is the action we wanted to update

    return (
        <div>
            {/* through Ternary operators */}

            { isLoggedIn ? <Layout /> : list}

            {/* { !isLoggedIn && list} */}

            {/* !isLoggedIn simply means false && <Auth /> only if isLoggedIn is false */}
            
            {/* { isLoggedIn && <Layout />} */}

            {/* isLoggedIn simply means true && <Auth /> only if isLoggedIn is true */}

        </div>
    )
}