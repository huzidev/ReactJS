import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/Cart-Store';


export default function CartList({Id, name, price, quantity, total}) {

    const dispatch = useDispatch();

    function incrementItems() {
        dispatch(cartActions.addToCart({
            Id,
            name,
            price
        }))
    }
    function decrementItems() {
        dispatch(cartActions.removeFromCart(Id));
    }
    function deleteItems() {
        dispatch(cartActions.delFromCart(Id));
    }
    return (
        <div className='item-list'>
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
                Total : $ {price}
            </article>
            <button onClick={decrementItems}>
                -
            </button>
            <button onClick={incrementItems}>
                +
            </button>
            <i className='fa fa-trash' onClick={deleteItems}>
            </i>
        </div>
    )
}
