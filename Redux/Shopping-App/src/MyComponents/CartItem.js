import React from 'react';

export default function cartItem({Id, name, quantity, price, total}) {

    // here we are using DESTRUCTURING REFERENCE and we've already pass the props in the CartItems.js

    // in 

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
            <button>
                -
            </button>
            <button>
                +
            </button>
        </div>
    )
}
