import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInActions } from '../../Store/Login-Store.js';
import CartList from './CartList.js';

export default function CartItems() {

    const CartItems = useSelector((state) => state.cart.itemsList)

    // const quantity = useSelector((state) => state.cart.totalQuantity)

    // let item;

    // const {Id, name, price, quantity, total} = item;

    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logInActions.back())
    }
    
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
            <i className='fa fa-arrow-left' onClick={logoutHandler}></i>
        </div>
    )
}
