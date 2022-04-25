import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function App() {
    return (
        <>
        {/* USING EXACT PATH INSTEAD OF JUST PATH IS GOOD PRACTICE BECAUSE REACT DO NOT READ IT COMPLETELY RATHER REACT READS IT PARTIALLY THEREFORE WE'VE TO USE EXACT PATH */}
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/About" element={<About />}/>
                    <Route exact path="/Contact" element={<Contact />}/>
                </Routes>
            </Router>
        </>
      )
}
