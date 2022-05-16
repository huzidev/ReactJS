import React from 'react';
import { useSelector } from 'react-redux';
import Items from './Items';

export default function Layout(props) {

    const quantity = useSelector((state) => state.cart.totalQuantity)

    // we'll pass this quantity variable inside ours JSX

    return (
        <div>
            <nav>
                <h2>
                    Redux Shopping App
                </h2>
                <div className='cart'>
                    <h5>
                        cart: {quantity} items
                    </h5>
                </div>
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
