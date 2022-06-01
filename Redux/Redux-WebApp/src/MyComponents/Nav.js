import React from 'react';
import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { layoutActions } from '../Store/Layout-Store';
import { cartActions } from '../Store/Cart-Store';

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

    const activeClass = hamburgerOpen ? ' open' : '';

    return (
        <div>
            <nav>
                <img src={Logo} alt="logo" className="logo"/>
                <div className='cart-btn'>
                    <i onClick={setShowCart} className="fas fa-shopping-cart"></i>
                    <div className='counter'>
                        <p>
                            {totalQuantity}
                        </p>
                    </div>
                </div>
                <div className='ham-side-bar'>
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
