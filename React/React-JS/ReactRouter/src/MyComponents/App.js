import React from 'react';
import Logo from '../assets/react.png'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="./About">
                    <About />
                </Route>
                <Route path="./Contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
      )
}
