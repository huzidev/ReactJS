import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart.js'
import CartItems from './CartItems.js';
import Items from './Items.js';

export default function Layout(props) {

    const showCart = useSelector((state) => state.cart.showCart)

    return (
        <div>
            <nav>
                <h2>
                    Redux Shopping App
                </h2>
                <Cart />
            </nav>
            <div className='list'>
                <Items />
            </div>
            <div className='right'>
                <h3>
                    Total : 100 $
                </h3>
            </div>
            <div className='right'>
                <button>
                    Place Order
                </button>
            </div>
            <div className='items-container'>
                {showCart && <CartItems />}
            </div>
        </div>
    )
}
