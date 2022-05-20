import React from 'react';

export default function cartItem({Id, name, quantity, price, total}) {

    // here we are using DESTRUCTURING REFERENCE and we've already pass the props in the CartItems.js

    // in CartItems.js we've imported CartItem and we've passed the props for CartItem and we've used useSelector hook for importing
    
    // all the data information like {TotalPrice, Price, Quantity Etc}

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
