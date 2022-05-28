import React from 'react';
// import { useSelector } from 'react-redux';
import CartList from './CartList.js';

export default function CartItems() {

    const CartItems = useSelector((state) => state.cart.itemsList)

    // const quantity = useSelector((state) => state.cart.totalQuantity)

    // let item;

    // const {Id, name, price, quantity, total} = item;

    return (
        <div className='cart-main'>
            <h2>
                Yours Cart
            </h2>
            <ul>
                {
                    CartItems.map((item) => (
                        <li>
                            <CartList 
                                Id = {item.Id}
                                name = {item.name}
                                price = {item.price}
                                quantity = {item.quantity}
                                total = {item.totalPrice}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
