import React from 'react';
import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { layoutActions } from '../Store/Layout-Store';

export default function Nav() {

    const hamburgerOpen = useSelector((state) => state.layout.hamburgerOpen);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    const dispatch = useDispatch();

    function hamburger() {
        dispatch(layoutActions.open());
    }



    const activeClass = hamburgerOpen ? ' open' : '';

    return (
        <div>
            <nav>
                <img src={Logo} alt="logo" className="logo"/>
                <div className='cart-btn'>
                    <i className="fas fa-shopping-cart"></i>
                    <div className='counter'>
                        <p>
                            {totalQuantity}
                        </p>
                    </div>
                </div>
                <div onClick={hamburger} className={'ham' + activeClass}>
                    <div className='hamburger-menu'>
                    </div>
                </div>
            </nav>
        </div>
    )
}
