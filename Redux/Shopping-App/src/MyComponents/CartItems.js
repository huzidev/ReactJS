import React from 'react';
import cartItem from './cartItem';
import { useSelector } from 'react-redux';

export default function CartItems() {

    const cartItems = useSelector((state) => state.cart.itemsList)

    return (
        <div>
            <h2>
                Yours Cart
            </h2>
        </div>
      )
}
