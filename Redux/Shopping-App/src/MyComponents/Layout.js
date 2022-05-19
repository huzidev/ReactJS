import React from 'react';
import Cart from './Cart.js'
import CartItems from './CartItems.js';
import Items from './Items.js';

export default function Layout(props) {

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
                <CartItems />
            </div>
        </div>
    )
}
