import React from 'react';
import Cart from './Cart.js'
import { useSelector } from 'react-redux';
import Items from './Items.js';

export default function Layout(props) {

    const quantity = useSelector((state) => state.cart.totalQuantity)

    // we'll pass this quantity variable inside ours JSX

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
        </div>
    )
}
