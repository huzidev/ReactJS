import React from 'react';
import Logo from '../assets/logo.png';

export default function Nav() {
    return (
        <div>
            <nav>
                <img src={Logo} alt="logo" className="logo"/>
                <div>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className='ham'>
                    <div className='hamburger-menu'>
                    </div>
                </div>
            </nav>
        </div>
    )
}
