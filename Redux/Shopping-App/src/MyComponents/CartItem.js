import React from 'react';

export default function cartItem({Id, name, quantity, price, total}) {
    return (
        <div>
            <h2>
                {name}
            </h2>
            <p>
                $ {price}
            </p>
            <p>
                x {quantity}
            </p>
            
        </div>
    )
}
