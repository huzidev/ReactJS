import React from 'react';
import { useSelector } from 'react-redux';
import CartList from './CartList.js';

export default function CartItems() {

    const CartItems = useSelector((state) => state.cart.itemsList)

    const quantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <div className='cart-main'>
            <h2>
                Yours Cart
            </h2>
            <ul>
                {CartItems.map((item) => {
                    const {Id, name, price, totalPrice, quantity} = item;
                    <li>
                        <CartList 
                            Id = {Id}
                            name = {name}
                            price = {price}
                            quantity = {quantity}
                            total = {totalPrice}
                        />
                    </li>
                })}
            </ul>
        </div>
    )
}
