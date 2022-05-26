import React from 'react';
import Login from './Login.js';
import Layout from './Layout.js';
import Nav from './Nav.js';
import { useSelector } from 'react-redux';

export default function App() {

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    return (
        <div>
            {isLoggedIn ? <Layout /> : <Login />}
        </div>
    )
}
