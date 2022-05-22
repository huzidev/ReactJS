import React from 'react';
import CartItem from './CartItem.js';
import { useSelector } from 'react-redux';

export default function CartItems() {

    const cartItems = useSelector((state) => state.cart.itemsList)

    const quantity = useSelector((state) => state.cart.totalQuantity)
    // here we don't have to import the complete file like we did for PRODUCT.js rather we've simply used useSelector so we can have access

    // of Redux-Store and we've used state.cart.itemsList which is the part of ours REDUX-STORE

    let show;
    
    if (quantity === 0) {
        show = false
    }
    else if (quantity > 0) {
        show = true;
    }

    return (
        <>
        <div className='cart-main'>
            <h2>
                Yours Cart
            </h2>
            { show ? 
                (<ul>
                    {cartItems.map((item) => (
                        <li key={item.Id}>
                            {" "}
                            <CartItem 
                                Id = {item.Id}
                                price = {item.price}
                                total = {item.totalPrice}
                                name = {item.name}
                                quantity = {item.quantity}
                            />
                            {" "}
                        </li>
                    ))}
                </ul>)
            : (<div className='center'> 
                <b> cart is empty </b>
                <p>
                    Go Buy Something
                </p>
              </div>)
              }
        </div>
        </>
      )
}
