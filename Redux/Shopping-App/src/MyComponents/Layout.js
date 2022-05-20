import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart.js'
import CartItems from './CartItems.js';
import Items from './Items.js';

export default function Layout(props) {

    let total = 0;

    const itemList = useSelector((state) => state.cart.itemList);

    // so we can have total price according to the items we added in ours cart therefore we've use useSelector for having the access

    // of REDUX-STORE

    const showCart = useSelector((state) => state.cart.showCart);

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
                    Total : {total} $
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
