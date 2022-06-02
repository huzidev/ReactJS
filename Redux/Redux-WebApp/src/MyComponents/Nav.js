import React from 'react';
import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { layoutActions } from '../Store/Layout-Store';
import { cartActions } from '../Store/Cart-Store';
import { logInActions } from '../Store/Login-Store';

export default function Nav() {

    const hamburgerOpen = useSelector((state) => state.layout.hamburgerOpen);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    const dispatch = useDispatch();

    function hamburger() {
        dispatch(layoutActions.open());
    }

    function setShowCart() {
        dispatch(cartActions.setShowCart());
    }

    function logoutHandler() {
        dispatch(logInActions.logOut())
    }

    const activeClass = hamburgerOpen ? ' open' : '';

    return (
        <div className='nav'>
            <nav className='header'>
                <div className='header-section logo-section'>
                    <img src={Logo} alt="logo" className="logo"/>
                </div>
                <div className={'ham-side-bar' + activeClass}>
                    <ul>
                        <div className='flex'>
                            <li className='nav-item'>
                                <a href="#" onClick={setShowCart}>
                                    Cart-Items
                                </a>
                            </li>
                            <div className='cart-section'>
                                <div className='cart-btn'>
                                    <i onClick={setShowCart} className="fas fa-shopping-cart sign"></i>
                                    <div className='counter'>
                                        <p>
                                            {totalQuantity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li className='nav-item'>
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#">
                                Contact Us
                            </a>
                        </li>
                        <div className='drop-down'>
                            <li className='nav-item'>
                                <a href="#">
                                    More
                                </a>
                                <ul className='drop-down-items'>
                                    <li>hello</li>
                                    <hr />
                                    <li>hello</li>
                                    <hr />
                                    <li>hello</li>
                                    <hr />
                                </ul>
                            </li>
                            <i className='fa fa-caret-down'>
                            </i>
                        </div>
                        <div className='flex'>
                            <li className='nav-item' onClick={logoutHandler}>
                                <a href="#">
                                    Logout 
                                </a>
                            </li>
                            <i class="fa fa-sign-out sign" onClick={logoutHandler}></i>
                        </div>
                    </ul>
                    <div onClick={hamburger} className={'ham' + activeClass}>
                        <div className='hamburger-menu'>
                            <div className='menu'>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}