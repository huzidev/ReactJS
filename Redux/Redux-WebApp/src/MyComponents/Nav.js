import React from 'react';
import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';

export default function Nav() {
    return (
        <div>
            <nav>
                <img src={Logo} alt="logo" className="logo"/>
                <div>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className={'ham' + (hamburgerOpen ? 'open' : '')}>
                    <div className='hamburger-menu'>
                    </div>
                </div>
            </nav>
        </div>
    )
}
