import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../Store/cart-slice';

export default function Cart() {

    const quantity = useSelector((state) => state.cart.totalQuantity)

    // we'll pass this quantity variable inside ours JSX

    const dispatch = useDispatch();

    const showCart = () => {

        dispatch(cartActions.setShowCart())

    }

    // dispatch (SEND) the cartActions.setShowCart() function from Redux-Store which we've already created in the Redux-store for ours cart

    // the btn for cart would not works until we've used useSelector hook for showCart in ours Layout.js and why Layout.js

    // is because we wanted to use ternary operator so the btn will only works will only show the cart only if it is clicked means when it became TRUE

    return (
        <div>
            <div className='cart cart-btn' onClick={showCart}>
                <h5>
                    <i className='fa fa-shopping-cart'></i>
                    &nbsp;: {quantity} items
                </h5>
            </div>
        </div>
    )
}
