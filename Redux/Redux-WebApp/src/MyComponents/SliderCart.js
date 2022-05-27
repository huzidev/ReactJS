import React from 'react';
import { useDispatch } from 'react-redux';
import ProductList from './ProductList.js'

export default function SliderCart() {

    const Products = ProductList.map((info) => {

        const {Id, name, price, img} = info

        // const dispatch = useDispatch();

        // function addToCart() {
        //     // Id,
        //     // name,
        //     // price
        //     dispatch()
        // }

    })

    return (
        <div>
            <div className='info'>
                <h3>
                    Now, Lets Buy <br />
                    SomeThing.
                </h3>
            </div>
            <div>

            </div>
        </div>
    )
};
