import React from 'react'

export default function cartItem({Id, name, quantity, total, price}) {
    return (
        <div>
            <h2>
                {name}
            </h2>
        </div>
    )
};
