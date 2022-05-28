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
        dispatch(cartActions.removeFromCart(Id);)
    }
    return (
        <div className='item-list'>
            
        </div>
    )
}
