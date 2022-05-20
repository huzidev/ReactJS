import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cart-slice';

export default function CartItem({Id, name, quantity, price, total}) {

    // here we are using DESTRUCTURING REFERENCE and we've already pass the props in the CartItems.js

    // in CartItems.js we've imported CartItem and we've passed the props for CartItem and we've used useSelector hook for importing
    
    // all the data information like {TotalPrice, Price, Quantity Etc}

    const dispatch = useDispatch();

    const decrementCartItems = () => {

        dispatch(cartActions.removeFromCart(Id));

    }

    const incrementCartItems = () => {

        dispatch(cartActions.addToCart({

            // these are all PAYLOADS which will be receive in ours REDUX-STORE with the help of DISPATCH

            // therefore we've used const id = action.payload in ours REDUX-STORE

            Id,
            name,
            price

        }))

    }


    return (
        <div className='items-list'>
            <h2>
                {name}
            </h2>
            <p>
                $ {price}
            </p>
            <p>
                x {quantity}
            </p>
            <article>
                Total: $ {total}
            </article>
            <button onClick={decrementCartItems}>
                -
            </button>
            <button onClick={incrementCartItems}>
                +
            </button>
        </div>
    )
}
