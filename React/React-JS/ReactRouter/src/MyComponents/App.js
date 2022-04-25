import React from 'react';
import Logo from '../assets/react.png'

export default function App() {
    return (
        <nav>
            <img src={Logo} alt="React-img" className='nav-logo'/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
      )
}
