import React from 'react';
import Nav from './Nav';
import Home from './Home'
import OwnerInfo from './OwnerInfo'
import ShowProducts from './ShowProducts'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/owner' element={<OwnerInfo />}/>
                    <Route exact path='/products' element={<ShowProducts />}/>
                </Routes>
            </Router>
        </div>
    )
}
