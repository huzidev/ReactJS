import React from 'react';
import Auth from './Auth.js';
import Layout from './Layout.js';
import { useSelector } from 'react-redux';

export default function App() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

// useSelector is used for have the access of REDUX-STORE and takes Redux-state as parameter and State is basically REDUX's state and auth is the name we've provided in ours REDUX STORE inside REDUCER and isLoggedIn is the action we wanted to update

    return (
        <div>
            {/* { isLoggedIn ? <Layout /> : <Auth />} */}
            { !isLoggedIn && <Auth />}
            { isLoggedIn && <Layout />}
        </div>
    )
}
