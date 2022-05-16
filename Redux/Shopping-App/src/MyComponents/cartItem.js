import React from 'react';

export default function CartItem({Id, name, quantity, total, price}) {
    return (
        <div>
            <h2>
                {name}
            </h2>
        </div>
    )
};
