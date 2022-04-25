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
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/About" element={<About />}/>
                        <Route exact path="/Contact" element={<Contact />}/>
                    </Routes>
                </div>
            </Router>
        </>
      )
}
