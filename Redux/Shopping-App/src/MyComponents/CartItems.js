import React from 'react';
import CartItem from './CartItem.js';
import { useSelector } from 'react-redux';

export default function CartItems() {

    const cartItems = useSelector((state) => state.cart.itemsList)

    return (
        <div className='items-container'>
            <h2>
                Yours Cart
            </h2>
            <ul>
                {cartItems.map((item) => (
                    <li>
                        {" "}
                        <CartItem 
                            Id = {item.Id}
                            price = {item.price}
                            total = {item.totalPrice}
                            name = {item.name}
                        />
                        {" "}
                    </li>
                ))}
            </ul>
        </div>
      )
}
