import React from 'react';
import Logo from '../assets/react.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav>
            <img src={Logo} alt="React-img" className='nav-logo'/>
            <ul>
                <li>
                    <Link to="/" className='link'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/About" className='link'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className='link'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    )
}
