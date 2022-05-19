import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {

    const quantity = useSelector((state) => state.cart.totalQuantity)

    // we'll pass this quantity variable inside ours JSX

    return (
        <div>
            <div className='cart'>
                <h5>
                    cart: {quantity} items
                </h5>
            </div>
        </div>
    )
}
