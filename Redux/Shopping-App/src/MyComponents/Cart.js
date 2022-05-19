import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../Store/cart-slice';

export default function Cart() {

    const quantity = useSelector((state) => state.cart.totalQuantity)

    // we'll pass this quantity variable inside ours JSX

    const dispatch = useDispatch;

    const showCart = () => {

        dispatch(cartActions.setShowCart())

    }

    return (
        <div>
            <div className='cart cart-btn'>
                <h5 onClick={showCart}>
                    cart: {quantity} items
                </h5>
            </div>
        </div>
    )
}
