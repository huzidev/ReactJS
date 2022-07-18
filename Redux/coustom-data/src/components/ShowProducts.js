import React from 'react';
import Products from './Products.js';
import productsdata from './data.js'

export default function ShowProducts() {
    
    const items = productsdata.map((info) => {
        const { id, img, name, price, description, model } = info;

        return(
            <>
                <Products 
                    id={id}
                    img={img}
                    name={name}
                    price={price}
                    description={description}
                    model={model}
                />
            </>
        )
    })

    return (
        <div>
            {items}
        </div>
    )
}
