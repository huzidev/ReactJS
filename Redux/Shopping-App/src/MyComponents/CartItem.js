import React from 'react';

export default function cartItem({Id, name, quantity, price, total}) {
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
                Total $ {total}
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
