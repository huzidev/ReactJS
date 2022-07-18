import React from 'react';
import Products from './Products.js';
import productsdata from './data.js'

export default function ShowProducts() {
    return (
        <div>
            {
                productsdata.map((info) => {
                    const { id, img, name, price, description, model } = info
                })
            }
            <Products />
        </div>
    )
}
