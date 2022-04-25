import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav>
            <img src={Logo} alt="React-img" className='nav-logo'/>
            <ul>
                <li>
                    <Link to="/">
                        Home
                     </Link>
                </li>
                <li>
                    <Link to="./About">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="./Contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    )
}
