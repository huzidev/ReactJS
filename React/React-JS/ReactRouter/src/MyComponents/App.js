import React from 'react';
import Logo from '../assets/react.png'
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
    return (
        <>
            <nav>
                <img src={Logo} alt="React-img" className='nav-logo'/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <Home />
            <About />
            <Contact />
        </>
      )
}
