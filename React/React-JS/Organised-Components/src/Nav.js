// Export so we can export it from their and import it at main (PARENT) file
import React from 'react';
import logo from './assets/react.png';
// REMEMBER while importing images make sure that the assets folder should've to be in the same folder as of where main PARENT index.js file is present
// here we just make a refrence that import (react.png) and assigned it the name logo then simply insert the same name in src={}

export default function Nav() {

    return(
        <nav>
            <img src={logo} alt="React-Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
            </ul>
        </nav>
    )

}