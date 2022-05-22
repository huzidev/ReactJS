import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/auth-slice.js'
import Cart from './Cart.js'
import CartItems from './CartItems.js';
import Items from './Items.js';

export default function Layout(props) {

    let total = 0;

    const dispatch = useDispatch();

    const itemsList = useSelector((state) => state.cart.itemsList);

    const logoutHandler = () => {

        dispatch(authActions.logOut())

    }

    // so we can have total price according to the items we added in ours cart therefore we've use useSelector for having the access

    // of REDUX-STORE

    // for each loop will increase the price according to every product's price

    itemsList.forEach((item) => {
        
        total += item.totalPrice;

    });

    const showCart = useSelector((state) => state.cart.showCart);

    return (
        <div>
            <nav>
                <h2>
                    Redux Shopping App
                </h2>
                <Cart />
                <div>
                    <button onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </nav>
            <div className='list'>
                <Items />
            </div>
            <div className='right'>
                <h3>
                    Total : {total} $
                </h3>
            </div>
            <div className='right'>
                <button>
                    Place Order
                </button>
            </div>
            <div className='items-container'>
                {showCart && <CartItems />}
            </div>
        </div>
    )
}
